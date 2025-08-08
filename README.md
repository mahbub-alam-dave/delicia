# Delicia — Recipe Booking Web Application

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://fascinating-queijadas-46bd45.netlify.app/)  
![License](https://img.shields.io/badge/License-MIT-blue)  
![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react)  
![Node.js](https://img.shields.io/badge/Node.js-16-green?logo=node.js)  
![MongoDB](https://img.shields.io/badge/MongoDB-4.4-green?logo=mongodb)  
![Firebase](https://img.shields.io/badge/Firebase-yellow?logo=firebase)  
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.2-blue?logo=tailwind-css)  

---

## 📖 Overview

**Delicia** is a dynamic recipe booking web application that showcases delicious recipes from around the world.  
It features a personalized user integration system with registration, login, and logout functionalities.

- **Guest Users:** Can browse limited features and view the home page recipes.  
- **Logged-in Users:** Access full features including exploring all recipes, viewing detailed recipe pages, adding their own recipes, and managing previously published recipes through protected routes.

Key highlights include a visually appealing home page banner, a showcase of the 6 most-liked recipes, and user-friendly navigation with protected access to detailed and recipe management pages.

---

## 🖼 Screenshot

![Delicia - Home Page](./public/delicia-home.png)  
*Replace with your actual screenshot image path*

---

## 🔗 Live Demo

- [Delicia Live Site](https://fascinating-queijadas-46bd45.netlify.app/)

---

## 🛠 Technologies Used

- HTML  
- Tailwind CSS  
- React.js  
- Node.js  
- Express.js  
- MongoDB  
- Firebase Authentication  

---

## ✨ Core Features

- 🔒 **User Authentication:** Register, login, and logout via Firebase.  
- 🍽️ **Recipe Browsing:** View popular recipes on the home page and explore all recipes.  
- ➕ **Add Recipe:** Protected page for logged-in users to add favorite recipes.  
- 📋 **Recipe Management:** Logged-in users can view, edit, or delete their own recipes.  
- ❤️ **Like Functionality:** Users can like recipes (except their own) with live like count updates and custom modal notifications.  
- 🔄 **Protected Routes:** Only authenticated users can access sensitive pages like add recipe and recipe details.  
- 🎨 **Custom UI:** Eye-catching banner, recipe cards, modals, and a consistent header/footer (except on error page).  

---

## 📦 Dependencies (high level)

- react  
- react-router-dom  
- tailwindcss  
- axios  
- firebase  
- express  
- mongoose  
- dotenv  

---

## 🚀 Run Locally — Detailed Setup

### 1. Clone the Repositories

```bash
git clone [CLIENT_REPO_URL]
git clone [SERVER_REPO_URL]
