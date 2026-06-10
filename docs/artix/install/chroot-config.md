# Chroot and Configure

```bash
artix-chroot /mnt
```

## Timezone and Locale

```bash
# Change to your timezone (e.g. America/Chicago, Europe/London, Asia/Tokyo)
ln -sf /usr/share/zoneinfo/Your_Continent/Your_City /etc/localtime
hwclock --systohc

# Enable locale
echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
echo "LANG=en_US.UTF-8" > /etc/locale.conf
```

## Hostname

```bash
echo "steamdeck" > /etc/hostname

cat > /etc/hosts << 'EOF'
127.0.0.1   localhost
::1         localhost
127.0.1.1   steamdeck.localdomain steamdeck
EOF
```

## Root Password and User

```bash
passwd
# set your root password

useradd -m -G wheel,audio,video,input,power -s /bin/bash deck
passwd deck

# Enable sudo for wheel group
EDITOR=nano visudo
# Uncomment: %wheel ALL=(ALL:ALL) ALL
```
## Enable Services

```bash
rc-update add NetworkManager default
rc-update add elogind boot
```