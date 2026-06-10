# Partition the NVMe

The Deck's internal SSD is ``/dev/nvme0n1``. Verify:

```bash
fdisk -l
```

Wipe and repartition **(THIS DESTROYS STEAMOS)**:

```bash
cfdisk /dev/nvme0n1
```
Choose **GPT** label type. Create this layout:

|Partition |	Size |	Type |	Purpose |
|----------|---------|-------|----------|
|nvme0n1p1 |	512M |	EFI  | System 	| Boot/EFI|
|nvme0n1p2 |	8G   |  Linux| swap 	| Swap (helps with the 16GB RAM under heavy gaming)|
|nvme0n1p3 |remainder|  Linux filesystem |	Root|

Write and quit.

## Format the Partitions

```bash
mkfs.fat -F 32 /dev/nvme0n1p1
mkswap /dev/nvme0n1p2
mkfs.ext4 /dev/nvme0n1p3
```

>Alternative: If you want btrfs with compression (good for the limited SSD), use ``mkfs.btrfs /dev/nvme0n1p3`` and mount with ``-o noatime,ssd,compress=zstd,space_cache=v2,discard=async`` This is what SteamOS does natively.

## Mount Everything

```bash
swapon /dev/nvme0n1p2
mount /dev/nvme0n1p3 /mnt
mkdir -p /mnt/boot
mount /dev/nvme0n1p1 /mnt/boot
```