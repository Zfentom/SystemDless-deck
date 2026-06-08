# Phase 1: Prepare the Boot Media

On any Linux/Windows machine:

- 1.Download the **base** ISO (not the desktop ISO — you want control):

```bash
https://artixlinux.org/download.php
```
Grab ``Grab: artix-base-openrc-YYYYMMDD-x86_64.iso``

- 2.Flash it:

```bash
# Linux
sudo dd bs=4M if=artix-base-openrc-*.iso of=/dev/sdX conv=fsync oflag=direct status=progress

# Windows — use Rufus in DD mode (not ISO mode)
```
