---
id: advanced
title: Set Up
---

### Software for this tutorial

This tutorial offers a worked example that utilizes a container, computes against publicly available data from a genetic study focused on black cottonwood or *Populus trichocarpa* [**[1]**](https://doi.org/10.1111/1755-0998.12056), and uses Slurm to submit interactive, single batch, and array jobs with Slurm (i.e., submitting multiple jobs to be performed in parallel). For this tutorial, we will be using a container made based on a Neural Network called Locator [**[2]**](https://elifesciences.org/articles/54507). Locator is a set of python tools [**[3]**](https://github.com/kr-colab/locator.git) that build a neural network with TensorFlow to predict the location of organisms based on their genotype (DNA; or genetic background). The Locator container was built using a python container (version 3.8-slim-buster) and a `Dockerfile` [**[4]**](https://github.com/finchnSNPs/Docker_kr-colab_locator) following the Locator installation instructions. Next the container was pushed to Docker Hub [**[5]**](https://hub.docker.com/repository/docker/finchnsnps/locator/general) where it can be pulled to Hyak `klone` and used with Apptainer using the following command: 

```bash
# Code for reference. No need to run this now. 
apptainer pull locator.sif docker://finchnsnps/locator:locator_v2
```

### Why use Slurm in this case?

The neural network is trained on genotypes from a set of organisms with known location (latitude and longitude). The network is then passed a random subset of genotypes from organisms of "unknown origin" as a blind test. The location of the test set samples is then predicted (latitude and longitude), and model error is determined by calculating the distance as-the-crow-flies (Haversine) between the known and predicted locations. To gain an understanding of the distribution of prediction error, this training/validation and testing protocol is repeated with additional random subsets of individual trees treated as "unknowns." This sets up am "embarassingly parallel" workload where models for each of these random subsets can be trained and tested in parallel and the results amassed later. 

#### Why Slurm?
* Although these example jobs will be quick for demonstration, some model training protocols with more data can take hours or days to run. Slurm allows you to submit this protocol as a batch job to run unsupervised or in the background. You don't have to monitor the job or your internet connection for your job to proceed uninterrupted. Come back when your work is complete! 
* Each random subset of samples to train and test the model can be a **separate job** run independently and not requiing communication or dependency between the processes. Slurm job arrays allow you to set this up with a single script that launches all jobs at once to run in parallel up to your resource limits (i.e., as many jobs will run in parallel as there are resoucres in your allocation to support that, other jobs will wait in the queue). 
* In addition to iterating on sample sets, scripting and variables allow you to test combinations of parameter sets used to fine tune models and *hopefully* reduce error. 

**This tutorial will demonstrate these benefits of Slurm and provide you with some template Slurm scripts that you can adapt for your purposes.**


### Tutorial Materials

To save a little time, we have stored the locator container (`locator.sif`) and all the materials for this tutorial under `/mmfs1/sw/hyak101/basics`, and you can make a copy all the materials to a working directory for this tutorial. 

:::warning Limited storage in your Home directory
Remember there is a 10GB disk storage limit in your Home directory? For our tutorials, we always recommend setting up a working directory in a location on the file system where you have a higher storage limit. For exmaple, `/gscratch/scrubbed/` and a directory under your UW NetID (e.g., `/gscratch/scrubbed/UWNetID`). If you need more guidance, please refer to the [**Set Up Instructions from the Slurm Tutorial**](https://hyak.uw.edu/docs/hyak101/basics/jobs#set-up) before you begin. 
:::

If you have set up your working directory, execute the following command from your working directory to make a copy of the tutorial materials. 

```bash
cp -r /mmfs1/sw/hyak101/basics/ .
# The "." is short hand for "here" meaning to make a copy in your current directory.
```

Change directory to the `basics/` directory and list its contents.  Listing the contents of the basics directory will show materials for this tutorial and our other tutorials.

```bash
cd basics
ls
```
Listing the contents of the basics directory will show materials for this tutorial and our other tutorials.
```bash 
24.07-tf2-py3-ood.sif  locator_NN_array.slurm     locator.sif       loop_script.sh            tf_tutorial.py
container-build.def    locator_NN_dropouts.slurm  loop_array.slurm  pi.py                     ubuntu-git.sif
data                   locator_NN_job.slurm       loop_job.slurm    tensorflow_nvgpu_ood.def  ubuntu.sif
```
 We will use the following materials for this tutorial:

1. `locator.sif` - the ending `.sif` stands for "Singularity Image Format" and indicates that this is a container image. Singularity is the previous name of Apptainer. This container image contains Locator and all its dependencies. 
1. `data/` - directory containing datafiles we will use with Locator. 
    1. `data/potr_genotypes1000.txt` - 1000 subsampled SNPs from the *Populus trichocarpa* genotype matrix from Geraldes et al. 2013 [**[3]**](https://doi.org/10.1111/1755-0998.12056) converted to dosage allele format (0 - homozygous for the reference allele; 1 - heterozygous; 2 - homozygous for the alternate allele). We'll use this one for exercises since it is faster to compute with. 
    1. `data/potr_genotypes.txt` - the full *Populus trichocarpa* genotype matrix from Geraldes et al. 2013 [**[3]**](https://doi.org/10.1111/1755-0998.12056). This dataset is here for you to use if you want to train the full model. 
    1. `data/potr_m_pred1.txt`, `data/potr_m_pred2.txt`, `data/potr_m_pred3.txt`, `data/potr_m_pred4.txt`, `data/potr_m_pred5.txt` - Sample origins for *Populus trichocarpa* individuals (latitude and longitude in decimal degrees); In each file, 10% of sample origins were replaced with "NA" and used as the test set of origin prediction. 
1. `locator_NN_job.slurm` - a Slurm batch script template for submitting single job to predict the origins of a subset of *Populus trichocarpa* individuals.
1. `locator_NN_array.slurm` - a Slurm batch script template for submitting an array job to predict the origins of **5 subsets** of *Populus trichocarpa* individuals.
1. `locator_NN_dropouts.slurm` - a Slurm batch script template for submitting an array job to predict the origins of **5 subsets** of *Populus trichocarpa* individuals for three different dropout proportions.

In the next sections, we will use the *Populus trichocarpa* data and the batch script templates to learn how to submit a single Locator job with Slurm. 

:::info Acknowledgements
In this tutorial we use publicly available data and software. 

Locator Neural Network is a copyright 2019 of C. J. Battey and released under a Non-Profit Open Software License 3.0 (NPOSL-3.0). 
* [**Locator publication**](https://elifesciences.org/articles/54507) Battey et al. 2020.
* [**Locator GitHub Repository**](https://github.com/kr-colab/locator.git) C. J. Battey and University of Oregon.
* [**Repository for the Dockerfile for Locator NN**](https://github.com/finchnSNPs/Docker_kr-colab_locator) Kristen Finch (Hyak Staff Scientist).
* [**DockerHub Repository for the Locator NN container**](https://hub.docker.com/repository/docker/finchnsnps/locator/general) Kristen Finch (Hyak Staff Scientist).

Our adaptation of *Populus trichocarpa* genotype data and locations are licensed under a CC0 1.0 Universal (CC0 1.0) Public Domain Dedication license.
* [***Populus trichocarpa*** **Paper**](https://doi.org/10.1111/1755-0998.12056) Geraldes et al. 2013.
* [**Original genotyping results available on DRYAD**](https://doi.org/10.5061/dryad.1051d) Geraldes et al. 2013.
:::