# Frequently Asked Questions

## Why switch away from systemd?

SystemDless Deck takes a different approach to system management by replacing systemd with a smaller, more modular init and service stack.

The goal isn't to claim that systemd is inherently bad, but to give Steam Deck users an alternative focused on simplicity, transparency, and control.

## Why Artix Linux?

Artix provides a systemd-free Arch-based environment while retaining compatibility with the Arch ecosystem and the AUR.

SystemDless Deck uses Artix with OpenRC as its init system.

## Why OpenRC?

OpenRC was chosen because it provides the best compatibility with the Steam Deck software stack used by SystemDless Deck. Most importantly, Decky Loader can run natively under OpenRC, without relying on non-systemd rewrittes or workarounds. Thought the setup is not as straight forward.

Artix also supports alternatives such as runit and s6, and they remain viable choices for users who prefer them. For SystemDless Deck, however, OpenRC offers the simplest path while maintaining compatibility with the software the project is built around. 

## Does Flatpak work?

Yes. Flatpak works normally on SystemDless Deck.

The project is about removing unnecessary constraints, not removing functionality.

## Is this a replacement for SteamOS?

Not exactly.

SystemDless Deck is an alternative Linux environment for Steam Deck users who want more control over their system. It is not intended to reproduce every part of SteamOS.

## Is this suitable for beginners?

SystemDless Deck is primarily aimed at users who are comfortable managing a Linux system and want more control over its underlying components.

## Will my plugins work?

Well depends major plugins tend to include some sort of dependecy on systemd, if the plugin does not require a dependecy for systemd(*example being CSS loader*) it should work without any issues.

## Can i use Window Managers?

Yes.

## Should i use a Window Manager?

No. Not at all, while it can be pretty good if you utilize hyprgrass plugin, keyboard support is a major issue i could not find a reasonable solution to.