## Gimme a Song! - song idea generator
This is a self-directed project. This is an ongoing project to showcase a song generator for bands and musicians who are stuck with what sort of song to write. My app randomly suggests a time signature, BPM, mood, key and starting instrument to get any musician going! You can also save your generated ideas.

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

- Email: tester@testing.com
- Password: gimmeatester

## Process
I started with: 
- a rough sketch of what I wanted the app to look like. This included pictures and a description of what I wanted the user to receive from the app (a randomly generated song idea).
- the database schema.

<img src="https://github.com/user-attachments/assets/32400176-ef18-4af9-b213-9285fcebb56c" width=50% height=50%>



Following this, I started setting up the Rails project and implementing the backend. TBC

## Wins
I learnt a lot about the whole process of making a full-stack application, in particular the difference between server-side and client-side. TBC

## Challenges
Something I found difficult was establishing the relationships between the different tables: Songs and Instruments. I realised early on that they had a many-to-many relationship, which would require a joins table called SongInstruments. After grappling with this for a couple of days, I decided to stop and sketch out the different relationships as you can see in the image below. This helped me to visualise the Active Record query methods and is something I now do before every new project.

Another challenge was working out how to randomly generate the instrument without constantly updating the database. TBC

## Future Additions
I'd like to add the ability to have multiple suggested instruments, as well as use the OpenAI api to suggest songs for inspiration.
