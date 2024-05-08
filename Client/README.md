# Project Overview - TV Show and Actor Review

# Requirements

## Database (Supabase)

 Design a database schema with relationships between tables

## Server (Express)

Create a new application with an Express server
   - Separate the server into its own folder named "server"
   - Implement Express endpoints to handle requests
   
## Client (React)

 Create a new application with a React client
   - Separate the client into its own folder named "client"
   - Utilize react-router-dom for multiple pages
   - Implement the following pages:
     - Home page
     - Page to show all posts
     - Page to create new posts using a form

## Data Seeding

Seed the database with data
   - Run SQL queries in Supabase SQL Editor
   
## Integration

 Use fetch to call the server from the client to get data

## Folder Structure

Maintain a clear folder structure:
   - Separate folders for server and client in the project root
   - Keep server-related code in the "server" folder
   - Keep client-related code in the "client" folder
  
 - ## About the Project

This project is a TV show and actor review site where users can browse and review their favourite TV shows and actors. 

# Seed JS

CREATE TABLE IF NOT EXISTS username (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    location TEXT
);

CREATE TABLE IF NOT EXISTS actors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    year INT
);

CREATE TABLE IF NOT EXISTS shows (
    id SERIAL PRIMARY KEY,
    show TEXT NOT NULL,
    year INT,
    rating INT
);

CREATE TABLE IF NOT EXISTS actors_junction (
    id SERIAL PRIMARY KEY,
    username_id INT REFERENCES username(id),
    actors_id INT REFERENCES actors(id),
    shows_id INT REFERENCES shows(id),
    posts_id INT REFERENCES posts(id)
);

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    location TEXT,
    actor TEXT,
    show TEXT,
    post TEXT
);
 
INSERT INTO username (name, location) VALUES
('Mel', 'Cambridge'),
('Dan', 'Ohio'),
('Kwame', 'Accra'),
('William', 'New York'),
('Linka', 'Moscow'),
('Gi', 'Hong Kong'),
('Burt', 'London'),
('Emily', 'Paris'),
('Jane', 'Tokyo'),
('Grace', 'Amsterdam');

-- INSERT INTO actors (name, show, year) VALUES
-- ('Walton Goggins', 'Fallout', 2024),
-- ('Bryan Cranston', 'Breaking Bad', 2008),
-- ('Jessica Gunning', 'Baby Reindeer', 2024),
-- ('Cosmo Jarvis', 'Shogun', 2024),
-- ('George Rexstrew', 'Dead Boy Detectives', 2024),
-- ('Andrew Scott', 'Ripley', 2024),
-- ('Theo James', '3 Body Problem', 2024),
-- ('Jovan Adepo', 'The Gentlemen', 2024),
-- ('Emilia Clarke', 'Game of Thrones', 2011),
-- ('Deborah Ayorinde', 'Them', 2024),
-- ('Colin Farrell', 'Sugar', 2024),
-- ('Cal Dodd', 'X-Men 97', 2024),
-- ('Melanie Lynskey', 'The Tattooist of Auschwitz', 2024),
-- ('Jeff Daniels', 'A Man in Full', 2024),
-- ('Idris Elba', 'Knuckles', 2024),
-- ('Elisabeth Moss', 'The Veil', 2024),
-- ('Ellen Pompeo', 'Greys Anatomy', 2005),
-- ('Iain Armitage', 'Young Sheldon', 2017),
-- ('Nathan Fillion', 'The Rookie', 2018),
-- ('Lily Gladstone', 'Under the Bridge', 2024),
-- ('Michael C. Hall', 'Dexter', 2006),
-- ('Melanie Lynskey', 'American Horror Story', 2011);

INSERT INTO shows (show, year, rating) VALUES
('Fallout', 2024, 1),
('Baby Reindeer', 2024, 2),
('Shogun', 2024, 3),
('Dead Boy Detectives', 2024, 4),
('Ripley', 2024, 5),
('The Gentlemen', 2024, 6),
('Game of Thrones', 2011, 7),
('Them', 2024, 8),
('Sugar', 2024, 9),
('X-Men 97', 2024, 10),
('The Tattooist of Auschwitz', 2024, 11),
('A Man in Full', 2024, 12),
('Knuckles', 2024, 13),
('The Veil', 2024, 14),
('Greys Anatomy', 2005, 15),
('Young Sheldon', 2017, 16),
('The Rookie', 2018, 17),
('Under the Bridge', 2024, 18),
('Dexter', 2006, 19),
('American Horror Story', 2011, 20),
('Breaking Bad', 2008, 32);

INSERT INTO actors_junction (username_id, actors_id, shows_id) VALUES
(2, 1, 2),
(1, 1, 2),
(1, 1, 2),
(1, 3, 1);

