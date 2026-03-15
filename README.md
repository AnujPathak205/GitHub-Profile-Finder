# GitHub-Profile-Finder
A responsive GitHub Profile Finder built with React and Tailwind CSS that fetches user profiles and repositories using the GitHub REST API.

# Features
1. GitHub Username search
2. Profile Information Display
    1. Name
    2. Username(login)
    3. Bio
    4. Location
    5. Followers
    6. Following
    7. Number of public repositories
3. Profile Avtar Display
4. Direct Link to Github Profile
5. Repository List Display
    1. Repository name
    2. Programming language used
    3. Repository description
    4. Link to onen the repository
6. Responsive design
7. Real time API data
8. Error handling for entering wrong username

# API used
GET https://api.github.com/users/{username} 

GET https://api.github.com/users/{username}/repos

# React Components
App is the main component and SearchBar, Profile and Repos are sub components
1. App: 
    Main component that manages state, fetches data from the GitHub REST API, and passes it to child components.
2. SearchBar: 
    Handles user input and allows searching GitHub usernames.
3. Profile: 
    Displays the user’s GitHub profile details like name, bio, avatar, and followers
4. Repos: 
    Shows the list of repositories with their name, description, language, and GitHub link.

# Tech Stack
1. React
2. Tailwind CSS
3. GitHub REST API
4. Vite

# Folder Structure
![Folder structure](/src/assets/image-1.png)

# screenshot
![screenshot](/src/assets/image.png)