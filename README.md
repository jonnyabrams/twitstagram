# Twitstagram (MERN)

A Twitter/Instagram hybrid. Can't choose between the two? Fret no longer!

Twitstagram was built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can sign up, log in, post, like/unlike posts, edit their own profile, follow other users and log out to their heart's content.

On a user's home feed, they only see their own posts and the posts of those they follow, presented in order of the most recent. On their profile, they only see their own posts.

<img width="1440" alt="Screenshot 2022-06-30 at 15 39 02" src="https://user-images.githubusercontent.com/97295867/176705525-18ae4dd7-0baa-4856-bf11-02430276e2c3.png">

---

## Video demo

https://user-images.githubusercontent.com/97295867/176141059-67130c04-b412-467b-b69d-744aee2a15f9.mp4

NB: There's an error towards the end where the user posts a post that appears on the screen already 'liked'. This was a local storage issue that I've since resolved.

---

## Technologies used

* React.js
* Node.js
* Express.js
* MongoDB
* Redux
* React Redux
* Redux Thunk
* CSS
* React Unicons
* Mantine for modals
* Bcrypt for hashing passwords
* Thunder Client for manually testing HTTP requests
* Axios
* JWT Authentication
* Concurrently (to run client and server simultaneously)
* Cors for sending cross-origin requests
* Multer for uploading media to the server

---

## Database Setup

Install MongoDB. If you are using a Mac you can do this via [Homebrew](https://brew.sh/):

```
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

Set your local MongoDB data directory, for example:

```
mkdir $HOME/mongodb-data
```

Start MongoDB:

```
mongod --dbpath $HOME/mongodb-data
```

Set your MongoDB URI:

```
echo MONGO_URI=mongodb://localhost:27017/yourtube >> .env
```

---

## Installation

Run `npm install` from both the `./server` and `./client` directories.

---

## Running

Launch MongoDB with `mongod`.

Run `npm run dev` from the `./server` directory.

---

## Instructions for use

1. Clone this repository
2. cd into its directory
3. cd into the server folder
4. Run `npm run dev` in the terminal to run the server and client concurrently
5. Visit [http://localhost:3000](http://localhost:3000) in your browser
6. Get Tweetstagramming

---

## My approach

Whereas usually I start with the backend, on this occasion I designed the frontend first (using dummy data for users and posts) before connecting the two.

I used Redux for state management as I was keen to learn more about it, but I could probably have used the React Context API (or even Redux Toolkit) instead.

---

## Improvements I would like to make

* User can delete posts from the UI - currently posts can only be deleted from the database or via an HTTP request using Postman or Thunder Client

* Image previews for the 'edit profile' modal (I have these for posts so it should be easy to implement)

* I plan to add a live chat functionality, so hopefully I'll remember to delete this bit from the README when I eventually do so

[Jonny Abrams](https://github.com/jonnyabrams)
