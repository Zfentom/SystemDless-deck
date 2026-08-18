# Setting up Steam and other Improvements

## Steam Installation

```bash
sudo pacman -S steam
```
Launch Steam from the application menu or terminal:
```bash
steam
```
Enable ``Proton`` in Steam → Settings → Compatibility → Enable Steam Play for all titles.

# Gamemode

While it is technically possible to recreate parts of the SteamOS experience, there is little practical benefit in trying to reproduce it exactly. One of the main limitations is touchscreen input: by default, Gamescope does not properly support touchscreen input when running in a nested environment, such as Gamescope running inside KDE.

If you want touchscreen support in this setup, you will need to build Gamescope with [Bryce Sub's touchscreen support PR](https://github.com/ValveSoftware/gamescope/pull/2244) applied.

The basic setup consists of three components:

- **steamos-session-select**
Create an executable at ``/usr/bin/steamos-session-select``. This is used to exist gamemode sessions.

- A Game Mode launcher
Create a second executable with a name such as ``start-gamemode``. You can then create a desktop shortcut named Return to Game Mode that launches it.

- A Steam service
Create a service that starts Steam when it is not already running. This is necessary for proper keyboard input and ensures Steam is available when exiting Game Mode.

This approach can get you reasonably close to the SteamOS session workflow,alternatives may be better but it requires additional configuration and maintenance. For most users, a standard KDE session with Gamescope launched as needed is likely the simpler option.

## Proton-GE (Recommended)

Stock Proton works, but Proton-GE (GloriousEggroll's fork) has better compatibility with many titles — extra patches, media codec fixes, and game-specific workarounds that haven't landed in upstream Proton yet.

```bash
yay -S protonup-qt
```

Launch ProtonUp-Qt, select "Install for Steam", and grab the latest GE-Proton build. Then in Steam per-game settings → Compatibility → force the GE version.

## Performance Overlay and Governor Tweaks (Recommended)

```bash
sudo pacman -S mangohud lib32-mangohud gamemode lib32-gamemode
```


- ``MangoHud`` — FPS/frametime/CPU/GPU overlay. Launch games with ``mangohud %command%`` in Steam launch options, or set MANGOHUD=1 globally.
- ``GameMode`` — Feral Interactive's daemon that auto-tunes CPU governor, I/O priority, and GPU clocks when a game launches. Add ``gamemoderun %command%`` to Steam launch options.

Combined: ``gamemoderun mangohud %command%``
