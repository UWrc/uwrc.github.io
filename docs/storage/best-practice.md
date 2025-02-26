---
id: best-practice
title: 3-2-1 Policy
---

Storage on every Hyak cluster is physically separate. It is best practice on every supercomputer that storage live on its own and is high-performance to handle the bandwidth I/O and read/write operations required by so many compute nodes attached to it. These are typically parallel file systems (e.g., GPFS, Lustre, BeeGFS).

This storage system is then mounted (i.e., accessible) from every compute node of the cluster. 
