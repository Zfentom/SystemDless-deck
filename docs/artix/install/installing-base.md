# Installing the Base System

```bash
basestrap /mnt base base-devel openrc elogind-openrc \
  linux linux-headers linux-firmware amd-ucode \
  grub efibootmgr os-prober \
  networkmanager networkmanager-openrc \
  pipewire pipewire-alsa pipewire-pulse wireplumber \
  nano git wget curl
  ```
  
What each group does:
- ``base base-devel openrc elogind-openrc`` - Artix core + session management
- ``linux linux-headers linux-firmware amd-ucode`` - kernel firmware(mostly drivers) + AMD microcode
- ``grub efibootmgr os-prober`` - bootloader
- ``networkmanager networkmanager-openrc`` - WiFi after reboot
- ``pipewire pipewire-alsa pipewire-pulse wireplumber`` - audio stack (PipeWire runs as a per-user service; KDE/SDDM will autostart it via XDG - if audio doesn't work after login, check wpctl status and ensure PipeWire is in your XDG autostart)
- The rest - essential tools

## Generate fstab

```bash
fstabgen -U /mnt >> /mnt/etc/fstab
```

Verify it looks correct:

```bash
cat /mnt/etc/fstab
```

You should see entries for ``/``, ``/boot``, and swap.