---
id: transfer
title: Data Transfer
---

Storage on every Hyak cluster is physically separate. It is best practice on every supercomputer that storage live on its own and is high-performance to handle the bandwidth I/O and read/write operations required by so many compute nodes attached to it. These are typically parallel file systems (e.g., GPFS, Lustre, BeeGFS).

This storage system is then mounted (i.e., accessible) from every compute node of the cluster. Each Hyak cluster (e.g., `klone`, `mox`) has its own separate parallel filesystem.

## Using `scp` and `rsync` to transfer data

#### Transfer data from `Klone` to your local computer with "server copy" or `scp`
```bash
scp UWNetID@klone.hyak.uw.edu:/path/to/data_to_transfer .
# The `.` specifies the current directory as the destination for the transferred files.
```
#### Transfer data from your local computer to `Klone` with "server copy" or `scp`
```bash
scp data_to_transfer UWNetID@klone.hyak.uw.edu:/path/to/directory
```
#### Similarly, data can be transferred using the `rysnc` command

```bash
# From Klone to your local computer
rysnc UWNetID@klone.hyak.uw.edu:/gscratch/scrubbed/UWNetID/text.txt .
# use -a to preserve original file permissions, timestamp, etc
rysnc -a UWNetID@klone.hyak.uw.edu:/gscratch/scrubbed/UWNetID/text.txt .
```
`rsync` and `scp` can be paired with other options such as `-v` (verbose) which provides a detailed output of the transfer process or `-z` ( `-c` for `scp` ) to compress data during transfers.

:::note important concept: `scp` vs `rsync`
`rsync` is generally used for larger file transfers and file synchronization. Unlike `scp` which always transfers the entire file, `rsync` will only transfer the parts of the file that changed. `rsync` can also resume aborted transfers from lost internet connections. `scp` works well for quick file transfers that do not require the additional features rsync provides.
:::
## Data transfer for larger files
#### For larger data files, you can compress them into tar files!

First, identify which files or directories you would like to transfer **on your local device** and compress them into tar archives:
```bash
# compressing an entire directory
tar -cvf data.tar data_directory
```
```bash
# compressing a single file
tar -cf data.tar data_file
```
The `-c` flag creates the tar archive, `-v` prints out all the files being processed, and `-f` allows you to name the archive. Once the files are compressed, transfer the tar file to `klone` from your local device with `scp` or `rsync`:
```bash
scp data.tar UWNetID@klone.hyak.uw.edu:/path/to/directory
```
`data.tar` will save to the specified `/path/to/directory`. To check if it transferred, log into Hyak and navigate to the target directory:
```bash
ssh UWNetID@klone.hyak.uw.edu
[UWNetID@klone-login03 ~] cd /path/to/directory
[UWNetID@klone-login03 ~] ls
# output
data.tar
```
`data.tar` should be color coded red, indiciating that is it an archive file. From here, you can unzip the tar file with the command:
```bash
tar -xvf data.tar
```
:::note Tar Options

**tar -c**: Creates a new tar archive

**tar -x**: Extract files from a tar archive

**tar -v**: Stands for "verbose". Displays the list of files being archived or extracted

**tar -f**: Allows you to specify the name of your archive file

**Use tar --help for a detailed list of tar options** 
:::

Alternatively, you can create a tar archive **and** copy it to `Klone` from your local device in one step:
```bash
tar cvf - data_directory/ | ssh UWNetID@hyak.klone.uw.edu "cat > /path/to/file/data.tar"
    Password:
    ...
```
This will create an archive of `data_directory` and send it directly to `Klone`. This directory will be saved under the name `data.tar` and will be located at the `/path/to/directory` that you specifiy. The `cat` command prints the contents of `data_directory` to your screen as they are transferring.

Check if it transferred to `Klone` by navigating to the directory it saved to:
```
cd /path/to/directory
ls

# output
data.tar
```
If it sucessfully transferred, unzip it using the `-xvf` flag:
```
tar -xvf data.tar
```