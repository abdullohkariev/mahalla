# Mahalla 90' — Restaurant Website

Official website for **Mahalla 90'**, a premium Uzbek restaurant in Tashkent.

🌐 **Live site:** [shosh-digital-tech.github.io/Mahalla-90](https://shosh-digital-tech.github.io/Mahalla-90/)

---

## About

Mahalla 90' is a restaurant where the spirit of the old mahalla meets modern Tashkent. The website presents the restaurant's story, menu, banquet options, gallery, location, and table reservation — in three languages (RU, UZ, EN).

---

## Features

- Hero section with autoplay video
- About section with restaurant video
- Menu section with PDF download
- Banquets section with video
- Gallery with 6 autoplay videos
- Table reservation form → sends booking to Telegram
- Location with Google Maps embed
- Multilingual: Russian, Uzbek, English
- Mobile responsive with hamburger menu

---

## Tech Stack

- Plain HTML + CSS
- React 18 (via CDN, no build step)
- Babel standalone (JSX in browser)
- Hosted on GitHub Pages

## File Structure

```
├── index.html          # Entry point
├── app.jsx             # Main app, theme & language state
├── sections1.jsx       # Nav, Hero, Marquee, About, Menu
├── sections2.jsx       # Banquets, Gallery, Location, Reservation, Footer
├── i18n.jsx            # Translations (RU / UZ / EN)
├── ornaments.jsx       # SVG decorative components
├── tweaks-panel.jsx    # Design tweaks panel
├── styles.css          # All styles
└── assets/             # Videos, logo, menu PDF
```

---

## Reservation

When a guest fills out the reservation form and clicks **Забронировать**, it opens Telegram (`@mahalla90uz`) with the booking details pre-filled. The guest sends the message to confirm.

---

## Built by

[Shosh Digital](https://shoshdigital.uz)
