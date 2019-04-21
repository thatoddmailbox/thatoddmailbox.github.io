---
layout: project

name: computer
details_front: A microcomputer, built from Soviet-era parts, designed for a History research project concerning the development of technology behind the Iron Curtain.
press: Featured in <a href="https://hackaday.com/2019/02/07/in-soviet-russia-computer-programs-you/" target="_blank">Hackaday</a> and <a href="https://blog.hackster.io/bringing-the-cold-war-back-with-soviet-era-microcomputer-replica-bc247a233b1f" target="_blank">hackster.io</a>
index: 2
feature: true

go_label: "Read blog post"
go_url: https://alex.studer.dev/2019/02/04/computer
github: https://github.com/thatoddmailbox/computer
license: ['MIT', 'CERN OHL']

technology:
- "KiCad"
- "Z80 Assembly"
- "Go"
---
# What is it?
This project is a (working!) microcomputer, designed around a [U880](https://en.wikipedia.org/wiki/U880) microprocessor, a clone of the West's [Zilog Z80](https://en.wikipedia.org/wiki/Zilog_Z80), using parts that were available in the Soviet Union during the Cold War. (although I did have to 'cheat' a bit with modern versions of some components when I could not find a Soviet version for sale, when the Soviet parts I received were defective, or, in the case of the display, when using an period-accurate part would have made the computer much more difficult to transport and use.)

# Why was it made?
My history class had been assigned a research project, with the format being relatively open, and I had chosen my topic to be technology behind the Iron Curtain. As I was starting my research, I realized that several of the components that I was reading about could actually be purchased on eBay, at prices that were far lower than what I was expecting! The only logical next step was to design a computer around these parts, in the spirit of Soviet computer hobbyists from the time.

# What am I proud of?
The fact that it works!  This computer was definitely one of the more ambitious hardware projects I've designed. At the start of the project, while I had some experience with writing software for the Z80, I had never (successfully) designed a computer around any sort of microprocessor, let alone the Z80, and was concerned that I would make some trivial error in the (nine page!) schematic or the layout of the circuit board, resulting in a non-functioning computer. However, I made sure to be careful and methodical in my designing, breaking the system into components that could be prototyped and verified independently on a breadboard. This meant that the final design had very few issues, with the errors I made in the circuit board layout being fairly easy to work around, and I was able to actually get the entire system running properly and submit it as part of my project.