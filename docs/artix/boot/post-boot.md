# Post-Boot Setup

Login as your user. Connect to WiFi:

```bash
sudo rc-service NetworkManager start
nmtui
# Select "Activate a connection", pick your WiFi, enter password
```

## Enable Arch Repositories

This is critical - you need Arch's repos for Mesa, Vulkan, Steam, and gaming packages.
```bash
sudo pacman -S artix-archlinux-support
```

Edit ``/etc/pacman.conf`` and add these near other repos:

```bash
# Arch Linux repos
[extra]
Include = /etc/pacman.d/mirrorlist-arch

[multilib]
Include = /etc/pacman.d/mirrorlist-arch``
```
Import the Arch keyring:
```bash
sudo pacman-key --populate archlinux
sudo pacman -Syyu
```
## Add Valve's Steam Deck Repositories

These provide Deck-specific drivers and firmware. Add to ``/etc/pacman.conf``:

```bash
[jupiter-main]
Server = https://steamdeck-packages.steamos.cloud/archlinux-mirror/$repo/os/$arch
SigLevel = Never

[holo-main]
Server = https://steamdeck-packages.steamos.cloud/archlinux-mirror/$repo/os/$arch
SigLevel = Never
```
```bash
sudo pacman -Syy
```
>Important: After installing packages from jupiter/holo, add them to IgnorePkg in pacman.conf so Arch's repos don't overwrite them on updates.