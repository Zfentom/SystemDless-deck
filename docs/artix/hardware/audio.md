# Audio(LCD Model)

---

>Arch Wiki ref: Steam Deck → Audio — LCD vs OLED firmware requirements, UCM profiles, crackling fixes, PipeWire — full PipeWire/WirePlumber config, Advanced Linux Sound Architecture — ALSA UCM troubleshooting

Good news: **LCD model audio works out of the box since kernel 6.1** (and you'll be on 6.12+ in 2026). With the ``pipewire`` + ``wireplumber`` stack you installed in Phase 5, audio should just work.

Ensure the UCM profiles are installed — these handle speaker/headphone switching:
```bash
sudo pacman -S alsa-ucm-conf
```
Verify:
```bash
# Check PipeWire is running
wpctl status

# Test audio
speaker-test -c 2 -t wav
```
If you get no sound, check that UCM profiles are present:
```bash
ls /usr/share/alsa/ucm2/conf.d/acp5x/
```

If that directory is empty after installing ``alsa-ucm-conf``, you may need to pull the Deck-specific configs from Valve's jupiter repo.