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

---

# Phase 2: Boot the Steam Deck from USB

1. **Power off** the Deck completely (hold power → Power Off)
2. Hold **Volume Down** + **Power** simultaneously
3. Release when the boot manager appears
4. Select your USB drive / microSD (it'll say "EFI USB Device" or similar)
5. Select the Artix boot entry

You'll land at a login prompt:

```bash
Username: root
Password: artix
```