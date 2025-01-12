# 🎵 Playlistr.

Playlistr is a local Spotify-powered app and an extension for the popular game **HITSTER**, perfect for creating and playing music-based games with printable QR code cards or virtual gameplay. 🎶
---

## 🚀 Features

1. **Card Creation Mode** 🃏  
   Generate printable PDF cards with QR codes for a unique offline experience. Perfect for parties or gatherings!

2. **Virtual Game Mode** 💻📱  
   Start the game directly on your PC or mobile device, where you can draw virtual cards from the deck and enjoy the fun digitally.

---

## ⚠️ Important Notes

- **Spotify Playlist Requirements:** Playlists must be **public** for the app to work. Private playlists or "For You" Spotify playlists are not supported.
- **Original Songs Only:** Ensure you use the original versions of songs (especially for older tracks), as remastered or re-released versions may have incorrect release years.

---

## 🛠️ Getting Started

### Prerequisites

To run Playlistr, you'll need:
- A **Spotify Developer account** with an app set up in the Spotify Developer Dashboard.
- **Node.js** and **Yarn** installed on your machine.

### Setting Up

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd playlistr
   ```

2. Copy the `.env.dist` file and create a `.env` file:
   ```bash
   cp .env.dist .env
   ```

3. Fill in the `.env` file with your Spotify credentials:
   ```env
   VITE_SPOTIFY_CLIENT_ID=<your-spotify-client-id>
   VITE_SPOTIFY_REDIRECT_URI=http://localhost:3000
   ```
   > **Note:** Ensure the `VITE_SPOTIFY_REDIRECT_URI` matches the redirect URI you set in your Spotify Developer Dashboard.

4. Install dependencies:
   ```bash
   yarn install
   ```

5. Start the development server:
   ```bash
   yarn dev
   ```

### Building for Production

To build the project for production:
```bash
yarn build
```

To serve the production build locally:
```bash
yarn preview
```

---

## 🎮 How to Play

### Card Creation Mode 🃏
1. Select the **Card Creation** mode in the app.
2. Generate a PDF with cards, each featuring a QR code linked to a Spotify song.
3. Print the cards and use them in your favorite music trivia or guessing games!

### Virtual Game Mode 💻📱
1. Select the **Play Game** mode in the app.
2. Virtually draw cards from the deck and let the app handle the music.
3. Enjoy a seamless and interactive music gaming experience.

---

## 📋 Notes for Developers

- The app is built with **Vite** for fast development.
- Designed to run **locally only**.

---

## 🛠️ Commands

### Development
```bash
yarn dev
```

### Build
```bash
yarn build
```

### Install Dependencies
```bash
yarn install
```

---

## 📚 Resources

- [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
- [Vite Documentation](https://vitejs.dev/)

---

## 🌟 Enjoy Playlistr!

Have fun creating and playing with music! Let the guessing begin! 🎧🎉
