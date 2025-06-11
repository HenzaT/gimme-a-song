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
- 
<img src="https://github.com/user-attachments/assets/3e5b18eb-92a5-4d21-949a-3517476792bf" width=40% height=40%>


Following this, I started setting up the Rails project and implementing the backend. To be continued...


## Reflections
I learnt a lot about the whole process of making a full-stack application, in particular the difference between server-side and client-side, and how the two communicate with one another. One challenge I faced was figuring out how to randomly generate the instrument without constantly updating the database, while still ensuring that the backend recognized the song and instrument data when saving a new song idea. This led me to use sessionStorage, as I didn’t want or need the randomly generated data to persist across browser sessions. It was a good fit for holding temporary client-side data.

<img src="https://github.com/user-attachments/assets/a9bc6f88-308f-4705-891a-e235353e2a3d" width=50% height=50%>

- Functions like randomTime, randomMood, etc, live in the Stimulus controller and generate specific song elements.
- As Instrument and Song were two separate models, I separated the sessionStorages too.
- To know if it was working, I put a simple console.log of the generated data. 

However, I realised that I still needed a way to save the generated data. I came upon a solution by accident, when I was trying to work out the logic of allowing a user to name their saved song idea - this would not work originally, as the validations on the Song model were not passing without a value for mood, key, etc being saved as well. As I was using Simple Form, I decided to use hidden_inputs for each of the song elements. This aligned perfectly with what I was trying to achieve with sessionStorage, as I could now send the data through as a hidden form field. 

<img src="https://github.com/user-attachments/assets/7ffdd9d2-ad52-472a-a2bc-6508a18eb14a" width=50% height=50%>


In the saveSong function, I could now use AJAX and the fetch API to send it through to my songs controller in Rails. This approach let me bridge the gap between the client-side generation and the server-side persistence of data.

<img src="https://github.com/user-attachments/assets/22cec5d1-d43b-406a-adde-0cb96d69e58d" width=50% height=50%>


Another challenge was establishing the relationships between the different tables: Songs and Instruments. I realised early on that they had a many-to-many relationship, which would require a joins table called SongInstruments. After grappling with this for a couple of days, I decided to stop and sketch out the different relationships as you can see in the image below. This helped me to visualise the Active Record query methods and is something I now do before every new project.

<img src="https://github.com/user-attachments/assets/32400176-ef18-4af9-b213-9285fcebb56c" width=50% height=50%>


## Future Additions
I'd like to add the ability to have multiple suggested instruments, as well as use the OpenAI api to suggest songs for inspiration.
