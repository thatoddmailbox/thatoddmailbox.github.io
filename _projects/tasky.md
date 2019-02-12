---
layout: project

name: tasky
details_front: A minimalistic to-do list website and Android app, both of which use MyHomeworkSpace to synchronize their data.
index: 2

links:
- icon: github
  name: View source (website)
  url: https://github.com/thatoddmailbox/tasky-web
- icon: github
  name: View source (Android app)
  url: https://github.com/thatoddmailbox/tasky-android
license: MIT

technology:
- "Java"
- "HTML"
- "CSS"
- "JavaScript"
---
# What is it?
tasky is a minimialistic service that let you keep a series of to-do lists. All of your data is stored in MyHomeworkSpace, meaning that the apps themselves are entirely client-side and just need you to grant access to your MyHomeworkSpace accounts.

# Why was it made?
There were two main reasons I wanted to create tasky: first, I needed a to-do list app, and second, it served as a test of the MyHomeworkSpace API. By building a relatively functional app, as simple as it may be, it made sure that there was nothing missing in the API and verified that it is possible to build something useful on top of MyHomeworkSpace.

# What am I proud of?
The apps themselves can rely entirely on MyHomeworkSpace for authentication and storage, meaning that they do not have nor need a backend, and can synchronize data between devices very easily. In addition, there were little to no changes necessary on the MyHomeworkSpace side of things, again proving that the API is pretty complete in terms of building apps to interact with MyHomeworkSpace.