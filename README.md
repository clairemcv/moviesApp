# Project - ReactJS app.

Name: Claire McVeigh

## Overview.

To fulfill the good band objectives for the Movies App and aim for some excellent ones if time allowed. 

 
 + Upcoming Movies
 + Top-rated Movies
 + Now playing Movies
 + Similar Movies - on Movie Details page
 + Cast credits for Movie - on Movie Details page

## Setup requirements.
No non standard necessary - npm start

## API Data Model.

Q. Specify the additional TMDB endpoints used and show sample responses, in JSON:


Credits endpoint; https://api.themoviedb.org/3/movie/539885/credits?api_key=afcb6bf3ef6b91fcf5cad6bfe725e104

Sample
[
{
cast_id: 0,
character: "Ava",
credit_id: "5b62972fc3a36818880284ad",
gender: 1,
id: 83002,
name: "Jessica Chastain",
order: 0,
profile_path: "/ArD58MbiD6jpLTcc64ngbB9dKbv.jpg"
},

Similar endpoint; https://api.themoviedb.org/3/movie/577922/similar?api_key=afcb6bf3ef6b91fcf5cad6bfe725e104

Sample
results: [
{
id: 2502,
video: false,
vote_count: 5252,
vote_average: 7.3,
title: "The Bourne Supremacy",
release_date: "2004-07-23",
original_language: "en",
original_title: "The Bourne Supremacy",
genre_ids: [
28,
18,
53
],
backdrop_path: "/fE7RqvVHbGHjBC9NjIjlLh2t4zK.jpg",
adult: false,
overview: "When a CIA operation to purchase classified Russian documents is blown by a rival agent, who then shows up in the sleepy seaside village where Bourne and Marie have been living. The pair run for their lives and Bourne, who promised retaliation should anyone from his former life attempt contact, is forced to once again take up his life as a trained assassin to survive.",
poster_path: "/7IYGiDrquvX3q7e9PV6Pejs6b2g.jpg",
popularity: 19.454
},

## App Design.

### Component catalogue.

 [For projects that expanded the Movies app, hi-light stories relating to new/modified components - ] .......

![][upcomingMovies]
![][topratedMovies]
![][nowplayingMovies]
![][similar]
![][credits]

./storybook.png

### UI Design.

./credit.png
![][Show Cast]
>Shows detailed cast information on a movie. Clicking the 'Show Cast' button will display the full cast for the movie.

./similar.png
![][Show Similar]
>Shows information for a list of movies similar to the one the user is looking at. Clicking the 'Show Similar' button will display this list.

./toprated.png
>List of movies with the highest points/votes

./upcoming.png
>List of movies coming out soon

./outnow.png
>List of movies out  now

### Routing.


+ /movies/upcoming - displays all upcoming movies
+ /movies/toprated - displays all top-rated movies
+ /movies/nowplaying - displays movies now on
+ /movies/:id/credits - detail view of the cast of a particular movie.
+ /movies/:id/similar - detail view of the cast of a particular movie.


## React feature set.

..... Insert a bullet-point list of the React features used in your project, including one source code file references for each - see examples below ......

+ useState and useEffect hooks - src/components/movieCredits/index.js
+ Extended Link - src/components/movieSimilar/index.js
+ Programmatic navigation - src/pages/upcomingMoviesPage.js


