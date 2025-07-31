# 🎵 Spotify Clone

A modern, responsive web-based music player inspired by Spotify's design and functionality. Built with vanilla JavaScript, HTML, and CSS.

## 🌟 Features

- **🎵 Music Playback**: Play, pause, skip tracks with full audio controls
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Modern UI**: Clean, Spotify-inspired interface with smooth animations
- **📚 Album Library**: Browse through multiple music albums and playlists
- **⏯️ Playlist Management**: Click on any song to play, use next/previous controls
- **🎚️ Volume Control**: Adjustable volume slider
- **⏱️ Progress Tracking**: Real-time progress bar with seek functionality
- **🔄 Auto-play**: Seamless track transitions

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **Web Audio API**: For audio playback and controls

## 📁 Project Structure

```
spotify-clone/
├── index.html          # Main HTML file
├── CSS/
│   ├── styles.css      # Main stylesheet
│   └── utility.css     # Utility classes
├── JS/
│   └── script.js       # Main JavaScript functionality
├── songs/              # Music library
│   ├── index.json      # Album index
│   ├── Diljit Dosanjh/
│   ├── english/
│   ├── Hot hits Punjabi/
│   ├── Karan Aujla/
│   └── Punjabi/
└── svg/               # UI icons and assets
```

## 🚀 Live Demo

**[🔗 View Live Demo](https://spotifycloneproject-vansh.netlify.app/)**

## 💻 Installation & Setup

### Prerequisites
- A modern web browser
- Local development server (optional, for testing)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/vanshmittalx/spotify-clone.git
   cd spotify-clone
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🎮 Usage

1. **Browse Albums**: Click on any album card to view its songs
2. **Play Music**: Click the play button on any song to start playback
3. **Control Playback**: Use the play/pause, next, and previous buttons
4. **Adjust Volume**: Use the volume slider in the bottom control bar
5. **Seek Through Songs**: Click on the progress bar to jump to different parts of the song

## 🎵 Adding Your Own Music

1. **Create a new folder** in the `songs/` directory
2. **Add your MP3 files** to the folder
3. **Add a cover image** named `cover.jpeg`
4. **Create an `info.json`** file with:
   ```json
   {
     "title": "Your Album Title",
     "description": "Album description",
     "songs": [
       "song1.mp3",
       "song2.mp3",
       "song3.mp3"
     ]
   }
   ```
5. **Update `songs/index.json`** to include your new album

## 🔧 Customization

- **Colors**: Modify CSS variables in `CSS/styles.css`
- **Layout**: Adjust the responsive breakpoints in the CSS
- **Icons**: Replace SVG files in the `svg/` directory
- **Styling**: Customize the design in `CSS/utility.css`

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by Spotify's design and functionality
- Icons and assets created for this project
- Built with modern web technologies

---

⭐ **Star this repository if you found it helpful!** 