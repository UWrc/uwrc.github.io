---
id: ollama_start
title: Start Here
---

Conventional LLM tools require root access for installation on Hyak. To maintain system security and stability, users do not have root or sudo access. Administrative privileges, including external program installations, are reserved for system administrators. To work around this, LLMs can be used via software [containers](https://hyak.uw.edu/docs/tools/containers).

## What Are Ollama LLMs?

Ollama LLMs are a large language models (LLMs) developed by Ollama. LLMs are artificial intelligence systems that understand human language. Ollama LLMs can run locally on your device and do not require constant internet connection to cloud-based servers that other LLMs may require. Because they generally require root access for installation on Hyak, it is reccommended that Ollama LLMs are used through NVIDIA containers. To get started with Ollama on Hyak, you will need to be accustomed with [Apptainer](https://hyak.uw.edu/docs/tools/containers#apptainer-formerly-singularity) and [requesting GPU jobs](https://hyak.uw.edu/docs/hyak101/basics/jobs#requesting-gpus-from-a-gpu-partition). 

:::note Relevant Vocabulary
**Apptainer**: Apptainer is a container program that facilitates the ability to create and run portable and reproducible containers, especially in an HPC environment like Hyak's current generation cluster, klone.

**Apptainer Definition File**: a recipe file for an Apptainer container which contains install instructions for software to be containerized. The file extension for an Apptainer definition file is .def.

**NVIDIA GPU Cloud**: A container registry that specializes in common GPU accelerated applications or GPU software development tools provided by NVIDIA. The [NVIDIA NGC catalog](https://catalog.ngc.nvidia.com/containers?filters=&orderBy=weightPopularDESC&query=&page=&pageSize=) has a wide variety of containers for machine learning and AI applications.
:::


The next section is aimed to provide additional context for GPUs and NVIDIA NGC containers used to train LLMs.
