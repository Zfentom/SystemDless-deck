# Connecting to wifi

Artix's live ISO uses ConnMan:

```bash
connmanctl
> agent on
> scan wifi
> services
```
You'll see a list of networks. Find yours - it'll look like ``wifi_XXXX_YYYY_managed_psk.``

```bash
> connect wifi_XXXX_YYYY_managed_psk
```

Enter your password when prompted, then:

```bash
> quit
```

Verify:

```bash
ping -c 3 artixlinux.org
```

# If wifi does not work

You can connect to the internet using USB tethering from your phone. Plug a USB-C cable between your phone and the Steam Deck, then enable ``USB tethering`` in your phone’s network settings.