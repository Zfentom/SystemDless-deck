# Exit and Reboot

> [!WARNING]
> Other kernels, such as linux-charocoal, should also work correctly and may be a better fit than linux-zen, as they are specifically tuned for Steam Deck hardware. Additionally, linux-tkg can be used to build a custom kernel optimized for the Steam Deck. Any alternative kernel needs matching ``-headers`` package for DKMS to work.

---

```bash
exit          # leave chroot(also exits user if you ran su "username" command)
umount -R /mnt
swapoff /dev/nvme0n1p2
reboot
```
Remove the USB/microSD when it powers down. The Deck should boot into Artix.

Switching to linux-zen 

---


The stock ``linux`` kernel works fine, but ``linux-zen`` includes scheduler and interactivity patches that measurably improve gaming performance and input latency on the Deck. Once your first boot is stable, switch:

```bash
# Install zen kernel + matching headers (headers required for DKMS modules)
sudo pacman -S linux-zen linux-zen-headers

# Regenerate GRUB to pick up the new kernel
sudo grub-mkconfig -o /boot/grub/grub.cfg

# Reboot into zen
sudo reboot
```

After reboot, verify you're on zen:

```bash
uname -r
# Should show something like: 6.12.x-zen1-1-zen
```

Keep the ``stock`` linux package installed — GRUB will show it as a fallback boot entry in case zen causes issues.

