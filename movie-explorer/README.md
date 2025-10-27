# 🎬 MovieMate - Movie Explorer App

A beautiful, modern web app for exploring and discovering your favorite TV shows and movies. Built with React and powered by the TVMaze API, MovieMate lets you search through thousands of shows, filter by genre, save favorites, and dive deep into show details.

## ✨ Features

- **🔍 Smart Search**: Find any TV show instantly with live search
- **🎭 Genre Filtering**: Filter shows by Drama, Comedy, Action, Romance, and more
- **❤️ Favorites System**: Save shows you love to your personal favorites collection
- **📱 Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations
- **📺 Show Details**: View detailed information including ratings, genres, and descriptions
- **💾 Persistent Storage**: Your favorites are saved locally, so they stay with you

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone or download this project**

2. **Navigate to the project directory**
   ```bash
   cd movie-explorer
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

   This will install all the necessary packages including React, React Router, and development tools.

### Running the App

**Start the development server:**
```bash
npm run dev
```

The app will open at `http://localhost:5173` (or another port if 5173 is busy). You should see it launch in your browser automatically!

**Build for production:**
```bash
npm run build
```

**Preview the production build:**
```bash
npm run preview
```

**Lint your code:**
```bash
npm run lint
```

## 🛠️ Tech Stack

This project is built using modern web technologies:

- **React 19** - The UI library
- **Vite** - Super fast build tool and dev server
- **React Router** - For smooth navigation between pages
- **Tailwind CSS** - For styling (via Vite plugin)
- **TVMaze API** - For fetching TV show data
- **LocalStorage** - For saving your favorites

## 📁 Project Structure

```
movie-explorer/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   └── CategoryFilter.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Favorites.jsx
│   │   └── MovieDetails.jsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useFetchMovies.js
│   │   └── useFavorites.js
│   ├── utils/            # Utility functions
│   │   └── api.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

## 🎯 How It Works

### Pages

- **Home**: The main page where you browse all shows, search, and filter by genre
- **Favorites**: Your personal collection of saved shows
- **Movie Details**: Deep dive into a specific show's information

### Key Features

**Search & Filter**: 
- Type in the search bar to find shows by name
- Click genre buttons (All, Drama, Comedy, etc.) to filter the results

**Favorites**: 
- Click the heart button on any show card to add it to favorites
- Visit the Favorites page to see all your saved shows
- Click again to remove from favorites

**Show Details**: 
- Click "Details" on any show card to see more information
- View the full description, genres, and high-quality images

## 🎨 Customization

Want to change the colors? The app uses a lovely teal and green color scheme. You can customize it by editing the color values in the components:

- Primary background: `#D5E6AB` (light green)
- Primary text: `#193A3C` (dark teal)
- Accent: Hover effects and buttons

## 📝 Notes

- This app uses the TVMaze API, which is free and doesn't require an API key
- Your favorites are stored in your browser's localStorage
- The app is fully client-side - no backend required!

## 🤝 Contributing

Feel free to fork this project and make it your own! Some ideas for enhancements:

- Add movie/TV show ratings
- Implement user reviews
- Add a watchlist feature
- Create social sharing for favorites
- Add dark mode toggle

## 📄 License

This project is open source and available for you to use and modify as you wish.

---

Enjoy exploring movies and shows! 🎉