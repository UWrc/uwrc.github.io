---
id: gui
title: GUI Usage
---

On this page we will provide options to interact with your data on Kopah via Graphical User Interfaces (GUIs).

## Cyberduck

Cyberduck is an open-source client for managing and transferring files to various cloud storage services and protocols, including FTP, SFTP, and S3. It offers a simple, intuitive interface that allows users to easily upload, download, and organize their files. Cyberduck is available for both Windows and macOS, making it a versatile tool for seamless file management across different platforms.

To get started with Cyberduck, install the software from the [**developer's website**](https://cyberduck.io/download/) on your local computer.

Steps for connecting to Kopah:

1. For ease of use, a pre-configured connection profile for Kopah is available. [**Click this link to Download the profile**](/files/kopah.cyberduckprofile). After the file is finished downloading, change the filename to `kopah.cyberduckprofile`. You may decide to move this file from your Downloads directory and store it in a more peranent location. Once the file is in its final location, double-click it within a file explorer it will open in Cyberduck.

![](/img/docs/kopah/cyberduck_profile.png 'Profile file in file explorer view.')

2. You should see your profile to connect to **Kopah S3** showing in the drop-down box. Enter you Access Key and Secret Key, which can be found in your Home directory on `klone`. When you requested your account the Kopah team deposited your Kopah keys, in your Home directory. 

![](/img/docs/kopah/cyberduck_connect.png 'Configure Connection')

3. Once that is complete, Kopah S3 will appear on your Cyberduck bookmarks or server list. **Connect** by double clicking on the **Kopah S3** bookmark. 

![](/img/docs/kopah/cyberduck_bookmarks.png 'Cyberduck bookmarks or list of servers')

4. You can now interact with Kopah using the GUI! Buckets can be created by right clicking and selecting **New Folder...**. Objects can be added to bucket by ***dragging and dropping*** files and directories into the buckets. 

![](/img/docs/kopah/cyberduck_buckets.png 'Buckets')

In the example above there are two buckets, `bucket1` and `bucket2`, each with one file.
