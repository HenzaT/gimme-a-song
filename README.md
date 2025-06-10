## Gimme a Song! - song idea generator
This is a solo project. This is an ongoing project to showcase a song generator for bands and musicians who are stuck with what sort of song to write. My app randomly suggests a time signature, BPM, mood, key and starting instrument to get any musician going! You can also save your generated ideas.

## Goals
My main aim here was to create something that solves a genuine problem (for me). The idea came when I was practising with my band and we could not think of a way to start a new song. I also wanted to:
- Consolidate my backend skills, specifically PostgreSQL and relational databases as a whole.
- Create a product that I would genuinely want to use. This meant it had to be easy to use and navigate. 

## Tech Stack
- Ruby on Rails
- HTML5
- CSS3
- JavaScript
- Bootstrap
- Git
- Github
- PostgreSQL

As I wanted to consolidate certain skills, I decided to use the same tech that I'd used for my previous group projects, so that I could focus more on the specific skills (rather than learning a new technology). As the project evolved I realised I needed to implement JavaScript a lot more than I had anticipated, particularly the fetch API. To generate the song elements, the user simply needed to see the different song elements on the client side; there was no need to update the instruments in the database every time. 

## Login
You can access the home and new idea page without logging in, as I wanted anyone to be able to use the app for some quick inspiration. To save a song however, you must log in. I utilised Devise for authentication. If you do not want to create a user, please use these login details instead:
Email:
- tester@testing.com
Password:
- gimmeatester
