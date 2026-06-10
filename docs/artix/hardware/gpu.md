# Graphics and Vulkan

## GPU Drivers

```bash
sudo pacman -S mesa lib32-mesa vulkan-radeon lib32-vulkan-radeon \
  vulkan-icd-loader lib32-vulkan-icd-loader \
  xf86-video-amdgpu libva-mesa-driver mesa-vdpau
  ```
  >You may have to choose first or second repo by pressing 1 or 2 when installing. 

## KDE Plasma Desktop

> [!NOTE]
> You can use any other DE but KDE is preffered for ease of use.

```bash
sudo pacman -S plasma-meta kde-applications-meta sddm sddm-openrc
sudo rc-update add sddm default
```
## Display Rotation for Wayland/KDE

The Deck's LCD panel is natively portrait. In KDE on Wayland, it auto-detects correctly in most cases. If it doesn't, go to: ``System Settings`` → ``Display and Monitor`` → ``Display Configuration`` → set rotation to landscape.

For X11, create ``/etc/X11/xorg.conf.d/10-monitor.conf``:

```bash
Section "Monitor"
    Identifier "eDP"
    Option "Rotate" "right"
EndSection
```