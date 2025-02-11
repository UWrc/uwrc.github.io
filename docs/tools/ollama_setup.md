---
id: ollama_setup
title: Using Ollama on Hyak
---

:::caution
This documentation page is under construction
:::

Conventional LLM tools require root access for installation on Hyak. To maintain system security and stability, users do not have root or sudo access. Administrative privileges, including external program installations, are reserved for system administrators. To work around this, LLMs can be used via software [containers](https://hyak.uw.edu/docs/tools/containers).

## What Are Ollama LLMs?

Ollama LLMs are a large language models (LLMs) developed by Ollama. LLMs are artificial intelligence systems that understand human language. Ollama LLMs can run locally on your device and do not require constant internet connection to cloud-based servers that other LLMs may require. Because they generally require root access for installation on Hyak, it is reccommended that Ollama LLMs are used through NVIDIA containers. To get started with Ollama on Hyak, you will need to be accustomed with [Apptainer](https://hyak.uw.edu/docs/tools/containers#apptainer-formerly-singularity) and [requesting GPU jobs](https://hyak.uw.edu/docs/hyak101/basics/jobs#requesting-gpus-from-a-gpu-partition). 

