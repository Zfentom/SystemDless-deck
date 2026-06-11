# Controller Input

This is where the systemd absence hurts most. Steam Input relies on systemd for controller enumeration on the Deck's built-in gamepad.

> **As of March 2026, this has not been fixed**. Valve's GitHub issue #9097 has been open since January 2023 with no upstream resolution. There is no fallback path in Steam for non-systemd init systems. elogind gets you partial functionality (trackpads/buttons in lizard mode, some basic remapping) but full gyro, advanced per-game profiles, and haptic feedback customization remain broken through Steam Input. **OpenSD is the real solution here.**

## Option A: OpenSD (Recommended)

OpenSD is a lightweight, systemd-free userspace driver for the Deck's controls:
```bash
yay -S opensd-git
```

Configure via text files in ``~/.config/opensd/``. The project has solid documentation at: https://codeberg.org/opensd/opensd-docs

OpenSD gives you full gamepad mapping, trackpad mouse emulation, and is actively maintained.

## Option B: Run Steam with ``--gamepadui`` and hope

Steam's built-in controller support partially works without systemd — the controls enter "lizard mode" (basic mouse/keyboard emulation) by default. Steam may pick them up when running, but Steam Input's full remapping pipeline is broken without systemd's logind.

## Option C: The elogind workaround

Artix's ``elogind`` provides some of logind's API surface. Some users report partial Steam Input functionality with elogind properly configured. Test it:

```bash
# Verify elogind is running
rc-service elogind status
loginctl
```

If ``loginctl`` shows your session, Steam Input may partially work. Your mileage may vary.