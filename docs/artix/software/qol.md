# Quality of Life

## Firmware Updates

The Deck's firmware can be updated via fwupd:
```bash
sudo pacman -S fwupd
sudo fwupdmgr refresh
sudo fwupdmgr get-updates
sudo fwupdmgr update
```

## Power Management / TLP
```bash
sudo pacman -S tlp tlp-openrc
sudo rc-update add tlp default
sudo rc-service tlp start
```
You can also use [SimpleDeckyTDP-Openrc](https://github.com/GannoK/SimpleDeckyTDP-OpenRC) to manage power and clock speeds in gamemode.

## Bluetooth
```bash
sudo pacman -S bluez bluez-utils bluez-openrc
sudo rc-update add bluetoothd default
sudo rc-service bluetoothd start
```
## Zram (Better than swap for the Deck)

If you want to supplement or replace the swap partition, use manual zram setup for OpenRC:
```bash
# Manual zram setup for OpenRC
sudo modprobe zram
echo lz4 | sudo tee /sys/block/zram0/comp_algorithm
echo 4G | sudo tee /sys/block/zram0/disksize
sudo mkswap /dev/zram0
sudo swapon -p 100 /dev/zram0
```
To persist this, create an OpenRC local script at ``/etc/local.d/zram.start``:
```bash
#!/bin/sh
modprobe zram
echo lz4 > /sys/block/zram0/comp_algorithm
echo 4G > /sys/block/zram0/disksize
mkswap /dev/zram0
swapon -p 100 /dev/zram0
```
Make it executable and enable the ``local`` service (required for ``/etc/local.d/`` scripts to run at boot):
```bash
sudo chmod +x /etc/local.d/zram.start
sudo rc-update add local default
```