# Known Issues and Workarounds

## 1. Steam Input / Controller Remapping

**Status**: Broken without systemd. Use OpenSD.

## 2. Gaming Mode (Deck UI)

**Status**: Not available. Gaming Mode is a SteamOS-specific shell (gamescope-session) that's deeply tied to systemd and Valve's custom packages. On Artix you run Steam in desktop mode. You can install gamescope and launch games through it:

```bash
sudo pacman -S gamescope
gamescope -w 1280 -h 800 -- steam
```

This gives you the compositor benefits (FSR upscaling, frame limiting) without the full Deck UI.

## 3. Suspend/Resume

**Status**: Partially works with elogind — roughly 70-80% reliable in practice. The Deck's suspend relies on ACPI hooks that the steamdeck-dkms driver provides. Random wake-from-sleep-on-battery failures and Bluetooth dropouts after resume remain common complaints even on systemd distros, so don't assume this is purely an init problem. Test with:

```bash
loginctl suspend
```

## 4. Brightness Control

Should work through sysfs:

```bash
# Check available
ls /sys/class/backlight/
# Adjust (max is typically 100)
echo 50 | sudo tee /sys/class/backlight/amdgpu_bl1/brightness
```
KDE's brightness slider should pick this up automatically.

## 5. WiFi Power Save Issues

If WiFi drops or is unstable, ``test first without any workaround`` — newer kernels (6.10+) and firmware updates have fixed power-save behavior for many users. Only apply this if you're actually seeing drops:

```bash
echo "options ath11k_pci power_save=0" | sudo tee /etc/modprobe.d/ath11k.conf
```

The Steam Deck LCD uses a Qualcomm/Atheros WiFi chip (ath11k), not Intel. On some kernel/firmware combos, forcing power_save=0 can actually cause more instability than leaving it at default. Remove the file if things get worse.

# Summary: What Works vs What Doesn't

| Feature |	Status |	Notes |
|---------|--------|----------|
|Display (LCD) |	Works |	Needs rotation config
|GPU acceleration |	Works |	Mesa + RADV
|WiFi |	Works |	NetworkManager
|Bluetooth |	Works |	BlueZ
|Audio (speakers) |	Works |	Since kernel 6.1, install alsa-ucm-conf
|Audio (headphones) |	Works |	UCM profiles handle switching
|Steam (desktop mode) |	Works |	Standard Linux Steam
|Proton / gaming |	Works 	| Proton-GE recommended via ProtonUp-Qt
|MangoHud + GameMode |	Works | 	gamemoderun mangohud %command%
|Fan control |	Works 	|Via steamdeck-dkms
|Built-in controls |	Partial |	Lizard mode only without OpenSD
|Steam Input remap |	Broken |	systemd dep, #9097 still open March 2026
|Gaming Mode (Deck UI) |	Not available |	SteamOS-specific
|Suspend/Resume |	Partial |	~70-80% reliable, elogind + DKMS
|Firmware updates |	Works |	fwupd