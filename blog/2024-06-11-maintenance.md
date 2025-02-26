---
slug: 2024-june-maintenance
title: June 2024 Maintenance Details
author: Kristen Finch
author_title: HPC Staff Scientist
author_url: https://github.com/finchnsnps
author_image_url: https://avatars.githubusercontent.com/u/22206944?v=4
tags: [klone,hyak,hpc,supercomputer,g2,L40,L40S,GPUs,AMD,Genoa,NVIDIA,job,internship]
---

Thanks again for your patience with our monthly scheduled maintenance. This month, we deployed new node resources that were purchased by various UW Researchers from across campus. These nodes are a little different, so we wanted to bring your attention to them and provide guidance on their use when they are idle with the checkpoint partition. 

### New G2 Nodes 

A new class of nodes have been deployed on `klone` which we are calling `g2` because they are the second generation of nodes, and we will retroactively refer to the first generation nodes as `g1`. `g2` CPU nodes feature AMD EPYC 9000-series 'Genoa' processors, and new GPU nodes featuring either NVIDIA L40 or L40S GPUs (with H100 GPUs possibly becoming available in the future). These nodes will join our community resources that can be used when idle (`ckpt`) under the new partitions: 
* `ckpt-g2` for scheduling jobs on `g2` nodes only.
* `ckpt-all` for scheduling jobs on either `g1` or `g2` nodes.
* `ckpt` will now schedule jobs on `g1` nodes only. 

 [**Please review our documentation HERE**](https://hyak.uw.edu/docs/compute/checkpoint#new-g2-nodes) for specific instructions for accessing these resources. Additionally, [**please see the blog post HERE**](https://hyak.uw.edu/blog/g1-vs-g2) where we discuss additional considerations for their usage.

To accompany the new `g2` node deployments, we are providing a new Open MPI module (`ompi/4.1.6-2`), which is now the default module when `module load ompi` is executed.  Previous OpenMPI modules will cause errors if used with the AMD processors on the new `g2` nodes due to how the software was compiled. `ompi/4.1.6-2` (and any openmpi module versions we provide in the future) are compiled to support both Intel and AMD processors. If your MPI jobs are submitted to a partition that includes `g2` nodes, you should use `module load ompi` to use the new module by default, or explicitly load `ompi/4.1.6-2` (or a newer version in the future) via `module load ompi/4.1.6-2`.
 
If you have compiled software on `g1` nodes, you should test them on `g2` nodes before bulk submitting jobs to partitions with `g2` nodes (i.e., `ckpt-g2` and `ckpt-all`), as they may or may not function properly depending on exactly how they were compiled.

### Student Opportunities

In addition, we have two student opportunities to bring to your attention.

**Job Opportunity:** The Research Computing (RC) team at the University of Washington (UW) is looking for a student intern to spearhead projects that could involve: (1) the development of new tools and software, (2) research computing documentation and user tutorials, or (3) improvements to public-facing service catalog descriptions and service requests. Hyak is an ecosystem of high-performance computing (HPC) resources and supporting infrastructure available to UW researchers, students, and associated members of the UW community. Our team administers and maintains Hyak as well as provides support to Hyak users. Our intern will be given the choice of projects that fit their interest and experience while filling a need for the UW RC community. This role will provide students with valuable hands-on experiences that enhance academic and professional growth. 

The position pays $19.97-21.50 per hour depending on experience with a maximum of 20 hours per week (Fall, Winter, and Spring) and a maximum of 40 hours allowed during summer quarter.
How to apply: Please apply by emailing: 1) a current resume and 2) a cover letter detailing your qualifications, experience, and interest in the position to me, Kristen Finch (UWNetID: finchkn). Due to the volume of applications, we regret that we are unable to respond to every applicant or provide feedback.

Minimum Qualifications:
* Student interns must hold at least a 2nd year standing if an undergraduate student. 
* Student interns must be able to access the internet.
* Student interns must be able to demonstrate an ability to work independently on their selected project/s and expect to handle challenges by consulting software manuals and publicly available resources. 

We encourage applicants that:
* meet the minimum qualifications.
* have an interest in website accessibility and curation.
* have experience in research computing and Hyak specifically. This could include experience in any of the following: 1) command-line interface in a Linux environment, 2) Slurm job scheduler, 3) python, 4) shell scripting. 
* have an interest in computing systems administration. 
* have an interest in developing accessible computing-focused tutorials for the Hyak user community.

**Conference Opportunity:** [**The 2024 NSF Cybersecurity Summit**](https://www.trustedci.org/2024-nsf-cybersecurity-summit) program committee is now accepting applications to the Student Program. This year’s summit will be held October 7th-10th at Carnegie Mellon University in Pittsburgh, PA. Both undergraduate and graduate students may apply. No specific major or course of study is required, as long as the student is interested in learning and applying cybersecurity innovations to scientific endeavors. Selected applicants will receive invitations from the Program Committee to attend the Summit in-person. Attendance includes your participation in a poster session. The deadline for applications is **Friday June 28th at 12 am CDT**, with notification of acceptance to be sent by Monday July 29th. [**Click Here to Apply**](https://docs.google.com/forms/d/e/1FAIpQLScL5fljASO6R6XWlesQrB5Js3TTx0UlAbuDmbDFDGpVnFzyvQ/viewform)

Our next scheduled maintenance will be **Tuesday July, 9, 2024**. 

Questions? If you have any questions for us, please reach out to the team by emailing help@uw.edu with Hyak in the subject line. ***Student intern applications sent to help@uw.edu will not be considered. Email applications to finchkn at uw.edu***
