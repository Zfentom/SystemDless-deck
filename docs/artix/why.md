# Why?

You might ask: *“Why switch away from systemd?”*

That’s a fair question.

On the Steam Deck, parts of the system can feel heavier than expected. Boot time is fine in most cases, but switching sessions or entering KDE (desktop mode) can feel slower than it should for a handheld device focused on responsiveness.

There’s also a broader system design direction behind modern Linux distributions. Systemd continues to grow beyond the traditional role of an init system, expanding into areas like user management and system-wide configuration. This includes richer structured user data in system databases and deeper integration with core system components.

This approach trades simplicity for integration. Instead of many small, separate components doing one job each, more responsibilities are centralized into a single tightly connected system.

SteamOS also reflects a similar philosophy in user space by leaning heavily on Flatpak for desktop applications. This provides consistency and sandboxing, but it also reduces how much direct control you have over the base system and how software integrates at the system level.

SystemDless Deck exists in response to that direction. It focuses on keeping the base system minimal and letting the user decide what gets added on top, rather than assuming a full stack from the start.


# Why Artix?

Artix Linux is used as the base system to provide a systemd-free environment with OpenRC as the init system. This keeps service management explicit and modular, avoiding the complexity of systemd while maintaining a lightweight and transparent system design.

The system remains Arch-compatible, allowing access to the Arch User Repository (AUR) for a wide range of additional software beyond the official repositories.