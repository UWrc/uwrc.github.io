import React from 'react';
import Layout from '@theme/Layout';

import Splash from "./components/Splash/Splash";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Pricing() {
  return (
<Layout title="Pricing">
  <div class="container">
    <div class="row">
      <br />
    </div>
    <Tabs
      className="unique-tabs"
      defaultValue="compute"
      values={[
        {label: 'Compute', value: 'compute'},
        {label: 'Storage', value: 'storage'},
        {label: 'Support', value: 'support'},
        {label: 'Try Hyak', value: 'trial'},
      ]}>
      <TabItem value="compute">
        <div class="row">
          <div class="col">
            <a name="condo-model" />
            <p>The Hyak Supercomputing Research Cluster is part of an integrated, scalable, scientific super-computing infrastructure operated by UW-IT. It includes a high-performance research network, the Hyak compute infrastructure (HPC and GPU clusters), and scientific support services available to consult on in your research workflows. The Science DMZ network supports fast data transfers among these systems and upstream to the rest of campus over the Internet.</p>
            <h3>Condo Model</h3>
            <p>The Hyak Supercomputing Research Cluster operates under a condo model common across many universities. In a condo model, the cluster consists of contributed slices from various groups across campus, and the Hyak team provides the core infrastructure (e.g., networking, storage, and support staff). Faculty, researchers, and some associates with affiliated organizations may purchase slices. Slice owners, members of their research group, and any collaborators get access to resources equivalent to your contributed slices on-demand.</p>
            <p>As a member of the Hyak community, you also receive access to all contributed slices from other entities, subject to their availability (i.e., if the contributors or the resources aren't actively using them). This is referred to as the <a href="https://hyak.uw.edu/docs/compute/checkpoint#the-checkpoint-partition"><b>"checkpoint" partition</b></a> due to the lack of job run-time guarantees. Checkpoint provides access to substantial resources beyond what you contribute and is the benefit of joining the Hyak ecosystem rather than buying the same hardware and operating your own server.</p>
            The total cost for Hyak compute slices can be broken down into the sum of the following two components.
            <ol>
              <li><a href="#slice-cost-hardware"><b>Slice Hardware Costs</b></a></li>
              <li><a href="#slot-fee-annual"><b>Annual Slot Fees</b></a></li>
            </ol>

            <a name="slice-cost-hardware" />
            <h3>Slice Hardware Configurations</h3>

            <p>We currently offer HPC slices and GPU slices. Our current slice offering specifications are based on market price and availability. To request detailed Hyak slice pricing and information, please complete the <a href="https://uwconnect.uw.edu/sp?id=sc_cat_item&sys_id=56f324af0faa6bc06cad419ce1050ed2"><b>Hyak Slice Pricing and Purchase Information Request Form</b></a>. Current configurations:</p>
            <p>
              <h4>Next-gen HPC slices (AMD):</h4>
              <ul>
                <li>256GB: $3,892.00 (pending delivery and installation). <b>ORDER TODAY! Limited inventory remaining on current order.</b></li>
              </ul>
              <h4>GPU slices (Nvidia):</h4>
              <ul>
                <li>L40S: 32-cores, 384GB, 2 x L40S GPUs (w/48GB per card) last quoted $17,889.75 (pending order and delivery).</li>
                <li>H200: 32-cores, 384GB, 2 x H200 (w/141GB per card) $58,910.25 (pending order and delivery; requires at least four slice purchases before an order can be made)</li>
              </ul>
              <p>Additional RAM may NOT be added to a slice after it is purchased; however additional slices can be added to the equivalent desired RAM.</p>
              <a href="https://uwconnect.uw.edu/sp?id=sc_cat_item&sys_id=56f324af0faa6bc06cad419ce1050ed2"><button class="button button--secondary button--block">Buy Slices</button></a>
            </p>

            <p>
              <h4>Storage:</h4>
                <ul>
                  <li>All slices include 1 TB of storagespace and a 1 million file count limit of shared group storage (i.e., gscratch) accessible from every node. You may purchase supplemental storage at a monthly rate of $10.00 per TB per month (with a limit of 1 million inodes per TB). Supplemental storage subscripts are subject to indirect costs. Storage prices are subject to revision annually. To request supplemental storage, email <b>help@uw.edu</b> with "Hyak gscratch" in the subject line.</li>
                  <li>Additional shared storage called <a href="https://hyak.uw.edu/docs/storage/gscratch#scrubbed"><b>"scrubbed"</b></a> is available for short-term use, but will be automatically deleted if not accessed for several weeks.</li>
                </ul>
            </p>

            <p>
              <h4>General FAQ:</h4>
              <ul>
                <li>All hardware is procured at cost (market value with substantial university negotiated bulk discounts) and no sales tax or university overhead applied.</li>
                <li>We reserve the 2nd Tuesday of every month for cluster maintenance.</li>
                <li>Hyak slices are supported for a minimum guaranteed lifetime of 4 or 5 years depending on the slice type. Beyond 4 or 5 years all slices are continued to be made available subject to hardware viability and the sponsoring entity still having capacity. Self-sponsored slices have an on-going annual cost, this means slice life is reviewed on a yearly basis subject to the lab's willingness to continue, hardware viability, and overall cluster capacity (see below for more about <a href="#slice-cost-annual"><b>Sponsored vs. Self-sposored slices</b></a>). Historically, slice service life has been 6 years on average. However, past performance is not a <i>guarantee</i> of future experiences.</li>
                <li><h5>HPC Slices:</h5></li>
                  <ul>
                    <li>All slices are standardized on AMD EPYC 9654 CPUs ("Genoa").</li>
                    <li>A physical server (or node) has 192-cores and &gt;1.5TB of memory packaged in a single box. This is in turn sub-divided into 6 equal "slices" that are resources of compute units that are sold to researchers.</li>
                    <li>Each node has 1.5TB or more of local NVME SSD disk storage. This is non-persistent storage and is cleared after a job ends. Data must be copied to and from local SSD before and after each job to utilize this.</li>
                    <li>Nodes are identically configured.</li>
                    <li>Any jobs requiring multiple nodes should be prepared to be independent computations (i.e., "embarassingly parallel") or make use of message passing libraries (e.g., OpenMPI) to scale across multiple nodes simultaneously.</li>
                  </ul>
                <li><h5>GPU Slices:</h5></li>
                  <ul>
                    <li>All slices are standardized on AMD EPYC 9534 CPUs ("Genoa"). We are on the NVIDIA "Ada" and "Hopper" generation of GPUs.</li>
                    <li>4 x GPU slices constitute a single physical server (or node). It is a single box with 128-cores, 1.5TB of memory, and 8 x GPUs of the same type. They are sold in resource slices to make this a more tractable cost for labs with more modest GPU needs.</li>
                    <li>Any jobs requiring more than 8 x GPUs of the same type should be prepared to make use of message passing libraries (e.g., PyTorch Lightning) to scale across multiple servers. Any job up to the equivalent of 4 x GPU slices (i.e., 8 x GPU cards) can be run on the same physical machine and therefore scale easily without much further modification to the codebase.</li>
                  </ul>
              </ul>
              <a href="https://uwconnect.uw.edu/sp?id=sc_cat_item&sys_id=56f324af0faa6bc06cad419ce1050ed2"><button class="button button--secondary button--block">Buy Slices</button></a>
            </p>

            <a name="slot-fee-annual" />
            <h3>Annual Costs</h3>

            <p>
            In addition to the hardware purchase costs above, Hyak slices may also be subject to annual maintenance fees (called slot fees) charged to sponsoring entities (listed below). Annual slot fees could be up to $800 for a HPC slice (1 slot), up to $1,200 for a L40S GPU slice (1.5 slots), and up to $1,600 for an H200 slice (2 slots). Prospective Hyak slice owners that are not associated with a sponsor are responsible for annual slot fees, which amount to $1,750 for HPC slices (1 slot), $2,625 for L40S GPU slices (1.5 slots), and $3,500 for H200 slices (2 slots). The difference in the number of slots occupied by a slice depends on the energy consumption of the slice, and GPU slices consume more energy. 
            </p>

            <p>
            <i><b>The Hyak sponsor chooses if and how to recuperate annual slot fees. Please consult your College IT director or Department Chair to determine the slot fees you can expect to pay annually.</b></i>
            </p>

            <b>Sponsors</b>:
            <ul>
              <li>UW Seattle</li>
              <ul>
                <li>College of Arts & Sciences</li>
                <li>College of Engineering</li>
                <li>College of the Environment</li>
                <li>School of Medicine</li>
              </ul>
              <li>UW Bothell</li>
              <li>UW Tacoma</li>
            </ul>

            <div class="row">
  
              <div class="col">
                <div class="card-demo">
                  <div class="card">
                    <div class="card__header">
                      <h5>Annual Slot Fees for Sponsored Slices</h5>
                      <h3>Up to $800 / 1 slot / 1 year</h3>                      
                    </div>
                    <div class="card__footer">
                    <a href="https://uwconnect.uw.edu/sp?id=sc_cat_item&sys_id=56f324af0faa6bc06cad419ce1050ed2"><button class="button button--secondary button--block">Buy Slices</button></a>
                    </div>
                    <div class="card__body">
                      What's included?
                      <ul class="check">
                        <li>Slice lifetime guaranteed for a minimum of 4 or 5 years depending on the slice type.</li>
                        <li>Access to the checkpoint partition for additional resources and compute time beyond what you contribute to the cluster.</li>
                        <li>Grant application support.</li>
                        <li>Scientific consultation for workflows and researcher onboarding.</li>
                        <li>Access to workshops and other training as provided.</li>
                        <li>Next business day support for questions.</li>
                        <li>24 / 7 / 365 monitoring of the cluster as a whole.</li>
                        <li>Regular (cyber)security patching and updates.</li>
                        <li>Historical uptimes better than 99% for the cluster not including previously scheduled maintenance days.</li>
                      </ul>
                      <p>NOTE: Slices purchased separately (below).</p>
                    </div>                    
                  </div>
                </div>
              </div>
              
              <div class="col">
                <div class="card-demo">
                  <div class="card">
                    <div class="card__header">
                      <h5>Annual Slot Fees for Self-Sponsored Slices</h5>
                      <h3>$1,750 / slot / year</h3>
                    </div>
                    <div class="card__footer">
                    <a href="https://uwconnect.uw.edu/sp?id=sc_cat_item&sys_id=56f324af0faa6bc06cad419ce1050ed2"><button class="button button--secondary button--block">Buy Slices</button></a>
                    </div>
                    <div class="card__body">
                    What's included?
                      <ul class="check">
                        <li>Everything that comes with sponsored slices.</li>
                        <li>Cluster membership can be evaluated annually.</li>
                      </ul>
                      <p>NOTE: Slices purchased separately (below).</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <br />

          </div>
        </div>
      </TabItem>
      
      <TabItem value="storage">
        <div class="row">          

          <div class="col">
            <div class="card-demo">
              <div class="card">
                <div class="card__header">
                  <h5>🔥 gscratch (Parallel File System)</h5>
                  <h3>$10 / 1 TB [1M files] / 1 month</h3>
                </div>
                <div class="card__footer">
                  <a href="mailto:help@uw.edu?subject=buy hyak (gscratch) capacity&body=I would like to buy some gscratch capacity on hyak.">
                  <button class="button button--secondary button--block">Get gscratch Capacity</button></a>
                </div>
                <div class="card__body">
                  What's included?
                  <ul class="check">
                    <li>A "hot" storage tier.</li>
                    <li>On campus parallel file system directly connected to Hyak.</li>
                    <li>No data access expenses or bandwidth limits.</li>
                    <li>Direct high speed / low latency Infiniband connectivity with (Hyak) compute nodes.</li>
                    <li>80 Gbps aggregate Ethernet upstream connectivity to external collaborators.</li>
                    <li>Use of common tools to migrate data (e.g., scp, rsync).</li>
                  </ul>
                  <b>Note:</b> An existing Hyak group account is required.
                </div>                    
              </div>
            </div>
          </div>
          
          <div class="col">
            <div class="card-demo">
              <div class="card">
                <div class="card__header">
                  <h5>💧 KOPAH (Object Storage)</h5>
                  <h3>Coming Soon</h3>
                </div>
                <div class="card__footer">
                <a href="">
                  <button class="button button--secondary button--block">Coming Soon</button></a>
                </div>
                <div class="card__body">
                What's included?
                  <ul class="check">
                    <li>A "warm" storage tier.</li>
                    <li>On campus object storage with 80 Gbps of aggregate upstream connectivity.</li>
                    <li>No data access expenses or bandwidth limits.</li>
                    <li>S3-compliant so any existing S3 tools can be used to copy and retrieve data.</li>
                    <li>Public buckets for external data sharing.</li>
                    <li>Private buckets for internal and lab-only access.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card-demo">
              <div class="card">
                <div class="card__header">
                  <h5>🧊 LOLO Archive (Tape)</h5>
                  <h3>$3.45 / 1 TB / 1 month</h3>
                </div>
                <div class="card__footer">
                <a href="https://uw.service-now.com/sp?
id=sc_cat_item&sys_id=d307c0cadb5e73c037ae9ec6db961963">
                  <button class="button button--secondary button--block">Get LOLO Archive Capacity</button></a>
                </div>
                <div class="card__body">
                What's included?
                  <ul class="check">
                    <li>A "cold" storage tier.</li>
                    <li>Cloud tape archive storage medium, one of the most stable.</li>
                    <li>No data access expenses or bandwidth limits.</li>
                    <li>Use of common tools to migrate data (e.g., scp, rsync).</li>
                    <li>Automatic geographical redundancy of your data (i.e., 2 copies).</li>          
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>            
      </TabItem>

      <TabItem value="support">
      <p>All storage and compute purchases come with support. A team of systems and storage engineers as well as staff scientists will provide at least next business day acknowledgement of any emails or tickets. Depending on the nature of the request or question there may be further delayed follow up for the tasks at hand. To start a help ticket email help@uw.edu and include Hyak in the subject line. Or use the button below.</p>
        
        <a href="mailto:help@uw.edu?subject=hyak support&body=Please direct this message to the Hyak team.">
            <button class="button button--secondary button--block">Request Support</button></a>
      </TabItem>

      <TabItem value="trial">
      <h3>Hyak Demo Accounts</h3>
            <p>Hyak no-cost demonstration accounts are intended for prospective slice owners to use the Hyak resources and assess whether the resources can serve their research computing needs. The account has some limits and not all features of Hyak will be available for demonstration, but you will be able to test workflows and software on the cluster.</p>  
            <b>Demonstration accounts are subject to the following restrictions</b>:
            <ul>
              <li>Jobs may only be submitted to the <a href="https://hyak.uw.edu/docs/compute/checkpoint#the-checkpoint-partition">ckpt partition</a>.</li>
              <li>Storage is limited under the demo account to <a href="https://hyak.uw.edu/docs/storage/gscratch#user-home-directory">10GB in the home directory</a>. For additional temporary storage you may utilize <a href="https://hyak.uw.edu/docs/storage/gscratch#scrubbed"> /gscratch/scrubbed storage</a>. Be aware that files in scrubbed not used for several months will be deleted. This storage in not intended for large datasets, but can be helpful as you try out workflows on Hyak.</li>
              <li>You may submit as many jobs as you like, but the scheduler will only allow one to run at a time.</li>
              <li>Your jobs are limited to 80 cores, 360 GB of memory, 2 GPUs, and a maximum of 2 discrete nodes.</li>
            </ul>
            <a href="mailto:help@uw.edu?subject=hyak demo account&body=I would like to open a Hyak demo account.">
            <button class="button button--secondary button--block">Request a Hyak Demo Account</button></a>
          
      </TabItem>
    </Tabs>

  </div>
</Layout>
  );
}
