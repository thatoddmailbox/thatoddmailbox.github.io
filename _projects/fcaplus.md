---
layout: project

name: FCAPlus
details_front: A series of patches for the FirstClass Android app that improve the app's usability and fix various bugs.
index: 2

github: https://github.com/thatoddmailbox/FCAPlus
license: MIT

technology:
- "Python"
- "Smali"
- "Java"
---
# What is it?
FCAPlus is the name I gave to a series of patches (along with a Python script to apply them) that take the Android app for FirstClass, the email system my school uses, and resolve various issues I've encountered.

# Why was it made?
The Android app for FirstClass isn't the greatest, with a dated, glitchy interface that was last updated in 2013, and an average rating of 2 stars. (at least, until it ended up being taken off the Play Store entirely) While I can't change what my school uses for email, I could try and fix some of these issues, which is why I created FCAPlus.

# What am I proud of?
Even though the code itself is not super complex, it's something that I've found to be incredibly useful and well worth the effort, even when it comes to minor changes like moving the send button on the "new email" screen. In addition, it was my first time with this sort of reverse-engineering and patching of an Android app, and I had to learn [Smali](https://github.com/JesusFreke/smali) in order for my patches to do anything really useful.