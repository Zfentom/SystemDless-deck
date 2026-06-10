# Steam Installation

```bash
sudo pacman -S steam
```
Launch Steam from the application menu or terminal:
```bash
steam
```
Enable ``Proton`` in Steam → Settings → Compatibility → Enable Steam Play for all titles.

## Proton-GE (Recommended)

Stock Proton works, but Proton-GE (GloriousEggroll's fork) has better compatibility with many titles — extra patches, media codec fixes, and game-specific workarounds that haven't landed in upstream Proton yet.

```bash
yay -S protonup-qt
```

Launch ProtonUp-Qt, select "Install for Steam", and grab the latest GE-Proton build. Then in Steam per-game settings → Compatibility → force the GE version.

## Performance Overlay and Governor Tweaks

```bash
sudo pacman -S mangohud lib32-mangohud gamemode lib32-gamemode
```


- ``MangoHud`` — FPS/frametime/CPU/GPU overlay. Launch games with ``mangohud %command%`` in Steam launch options, or set MANGOHUD=1 globally.
- ``GameMode`` — Feral Interactive's daemon that auto-tunes CPU governor, I/O priority, and GPU clocks when a game launches. Add ``gamemoderun %command%`` to Steam launch options.

Combined: ``gamemoderun mangohud %command%``
