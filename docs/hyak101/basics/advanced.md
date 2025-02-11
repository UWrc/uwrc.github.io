---
id: advanced
title: Locator Neural Network
---

:::caution

This documentation is under construction.

:::

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


### Software for this tutorial

For this tutorial, we will be using a container made based on a Neural Network called Locator [**[1]**](https://elifesciences.org/articles/54507). Locator is a set of python tools [**[2]**](https://github.com/kr-colab/locator.git) that build a neural network with Tensorflow to predict the location of organisms based on their genotype (DNA; or genetic background). The neural network is trained on genotypes from a set of organisms with known location (latitude and longitude). The network is then passed genotypes from organisms of unknown origin, and their location is predicted (latitude and longitude). Model error can be determined by calculating the distance as-the-crow-flies (Haversine) between the known and predicted locations. We'll use this container and a publicly available dataset to learn how to submit single and array jobs to Hyak's job scheduler, Slurm. 

:::important Data Source Credit

The data used for this worked example is from a genetic study focused on black cottonwood *Populus trichocarpa*. [**[3]**](https://doi.org/10.1111/1755-0998.12056)

:::

The Locator container was built using a python container (version 3.8-slim-buster) and a `Dockerfile` [**[4]**](https://github.com/finchnSNPs/Docker_kr-colab_locator) on my local computer, and following the Locator installation instructions. Next a pushed the container to Docker Hub [**[5]**](https://hub.docker.com/repository/docker/finchnsnps/locator/general). I pulled it to `klone` with the following command: 

```bash
# Code for reference. No need to run this now. 
apptainer pull locator.sif docker://finchnsnps/locator:locator_v2
```

#### Copying materials for this tutorial. 

To save a little time, we have stored the container to run locator (`locator.sif`) at `/mmfs1/sw/hyak101/basics` and you can make a copy of it in your local directory for this tutorial. 

```bash
cp /mmfs1/sw/hyak101/basics/locator.sif .
# The "." is short hand for "here" meaning to make a copy in your current directory.
```

In addition, we will use the following datafiles and scripts:

1. `data/potr_genotypes.txt` - *Populus trichocarpa* genotype matrix from Geraldes et al. 2013 [**[3]**](https://doi.org/10.1111/1755-0998.12056) converted to dosage allele format (0 - homozygous for the reference allele; 1 - heterozygous; 2 - homozygous for the alternate allele). 
2. `data/potr_m_pred1.txt`, `data/potr_m_pred2.txt`, `data/potr_m_pred3.txt`, `data/potr_m_pred4.txt`, `data/potr_m_pred5.txt` - Sample origins for *Populus trichocarpa* individuals (latitude and longitude in decimal degrees); In each file, 10% of sample origins were replaced with "NA" and used as the test set of origin prediction. 
3. `locator_NN_job.slurm` - a Slurm batch script template for submitting single job to predict the origins of a subset of *Populus trichocarpa* individuals.
4. `locator_NN_array.slurm` - a Slurm batch script template for submitting an array job to predict the origins of **5 subsets** of *Populus trichocarpa* individuals.

Copy all of these materials to your current directory with the following command. Below, the first command will recursively copy the directory called data and all of its contents to your current directory. The second command the `*` or wildcard will copy all files beginning with `locator_NN_` to your current directory.

```bash
cp -r /mmfs1/sw/hyak101/basics/data/ .
cp /mmfs1/sw/hyak101/basics/locator_NN_* .
```

In the next sections, we will use the *Populus trichocarpa* data and the batch script templates to learn how to submit jobs to Hyak's job scheduler, Slurm. 

### Literture Cited

1. [**Locator publication**](https://elifesciences.org/articles/54507) (Battey et al. 2020) 
2. [**Locator GitHub Repository**](https://github.com/kr-colab/locator.git) University of Oregon
3. [***Populus trichocarpa*** **Paper**](https://doi.org/10.1111/1755-0998.12056) (Geraldes et al. 2013)
4. [**Repository for the author's Dockerfile for Locator NN**](https://github.com/finchnSNPs/Docker_kr-colab_locator) 
5. [**Docker Hub Repository for the author's Locator NN container**](https://hub.docker.com/repository/docker/finchnsnps/locator/general)