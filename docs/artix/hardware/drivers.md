# Steam Deck Drivers (Fan/TDP/ACPI)

This gives you fan control, TDP adjustment, and proper ACPI support:
```bash
# You'll need an AUR helper first
sudo pacman -S --needed base-devel git

# Install yay (or paru — paru is faster with better dependency solving,
# either works fine. Substitute 'paru' for 'yay' throughout if you prefer.)
cd /tmp
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si

# Alternative: paru
# git clone https://aur.archlinux.org/paru.git
# cd paru
# makepkg -si

# Install DKMS and the Steam Deck platform driver
sudo pacman -S --needed dkms
yay -S steamdeck-dkms
```
This compiles a DKMS module for fan curves, power management, etc.