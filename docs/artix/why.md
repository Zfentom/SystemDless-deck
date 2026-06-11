# FAQ

## Why switch away from systemd?

There are both practical and philosophical reasons.

On the Steam Deck, some parts of the system can feel heavier than expected. While boot times are generally acceptable, switching sessions or entering KDE Desktop Mode may feel slower than expected for a handheld device focused on responsiveness.

There is also a broader design consideration. Systemd has expanded beyond its original role as an init system and now provides functionality such as user management, networking components, and various system services. This results in a more integrated system, but also increases complexity and centralization.

SystemDless Deck takes a different approach by keeping the base system minimal and allowing users to choose which components they want to build on top of it.

## Why Artix Linux?

Artix Linux provides a systemd-free environment while remaining fully compatible with Arch Linux.

This project uses OpenRC as its init system, keeping service management straightforward and modular while avoiding a dependency on systemd.

Because Artix remains Arch-compatible, users retain access to the Arch User Repository (AUR), providing a large ecosystem of community-maintained packages.

## Why OpenRC?

OpenRC is a mature and lightweight init system that focuses on service supervision and dependency management without requiring systemd.

It is simple to understand, easy to debug, and integrates well with the goals of a minimal, user-controlled system.

## Does this mean Flatpak is unsupported?

No.

Flatpak works perfectly fine on Artix and can still be used if desired. The goal of this project is to provide choice, not to remove functionality.

## Why OpenRC instead of runit, s6, or another init system?

Artix supports multiple init systems, including OpenRC, runit, and s6.

For this project, OpenRC was chosen because it strikes a balance between simplicity, flexibility, and ease of maintenance. It provides dependency-based service management, is well documented, and is familiar to users coming from more traditional Linux distributions.

OpenRC also has broader service availability within the Artix ecosystem. Some packages and community-maintained service scripts are only available for OpenRC, which reduces the amount of manual setup required compared to other init systems.

Runit and s6 are both excellent alternatives and can provide a smaller or more minimal system. However, they may require additional manual configuration and service porting depending on the software being used.

The choice of OpenRC is primarily a practical one: it offers a straightforward migration path from SteamOS while remaining systemd-free.
