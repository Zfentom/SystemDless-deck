# Bootloader (GRUB)

## Install GRUB for UEFI

```bash
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=Artix --recheck
```

## Configure Kernel Parameters

Edit ``/etc/default/grub`` and set the ``GRUB_CMDLINE_LINUX_DEFAULT`` line to:
```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=off amdgpu.gttsize=8128 nowatchdog mitigations=off spi_amd.speed_dev=1 audit=0 fbcon=vc:2-6"
```

What these do:

- ``amd_iommu=off`` - fixes IOMMU issues on Van Gogh
- ``amdgpu.gttsize=8128`` - sets GPU translation table size correctly
- ``mitigations=off`` - Disables Spectre and Meltdown, does give minimal performance increase usually around 5-10%
- ``nowatchdog`` - Disables watchdog,usualy is uneccessery overhead
- ``spi_amd.speed_dev=1`` - fixes SPI controller speed
- ``audit=0`` - disables kernel audit (unnecessary overhead)
- ``fbcon=vc:2-6`` - reserves VT1 for the display manager

Generate the config:
```bash
grub-mkconfig -o /boot/grub/grub.cfg
```