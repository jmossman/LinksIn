# 🔗 LinksIn – Momentum Assured

Welcome to **LinksIn**, a minimalist, secure profile showcase platform built with HTML, CSS, and JavaScript. Designed for clean personal or professional profiles with lightweight privacy and theme control features.

---

## 🌐 Live Site

👉 [https://momentumassured.com](https://momentumassured.com)

---

## ✨ Features

- 🔐 **Private Access**: Custom login screen using `sessionStorage` authentication
- 🌓 **Light/Dark Mode**: User-toggleable theme preference with local storage
- 👤 **Modular Profiles**: Two individual profile pages with custom fields and visibility rules
- 💾 **Single Session Login**: User stays logged in until they close the browser tab
- 🌍 **Deployed on GitHub Pages**: With custom domain support
- 🎨 **Mobile-Friendly**: Clean UI across desktop and mobile

---

## 📁 Project Structure

```
├── index.html                # Homepage with links to profiles
├── profile1.html             # Profile: Jane Smith (all fields visible)
├── profile2.html             # Profile: John Doe (partial visibility)
├── mission.html              # Project mission statement
├── functional-spec.html      # Functional spec & technical scope
├── styles.css                # Centralised styling and themes
├── auth.js                   # Session-based login logic
├── theme.js                  # Light/dark mode + logout handler
├── utils.js                  # Shared utility functions
├── favicon.ico               # Custom compass-style tab icon
└── images/                   # Profile pictures
```

---

## 🔧 How It Works

- On page load, `auth.js` checks for session auth
- If not authenticated, a styled login form replaces the page content
- On successful login, the session is stored and user is granted access
- Light/Dark mode can be toggled at any time (preference saved in `localStorage`)
- `logout()` is available on all pages to end session and return to login

---

## 🛡️ Credentials (Demo)

> Used for internal/private access. Session resets when tab is closed.

- **Username**: `pineapple`
- **Password**: `zeppelin`

---

## 📌 Ideas for Future Enhancements

- 📬 Add working contact/message functionality
- 🧪 Introduce automated tests (`Jest`)
- ✍️ Editable profiles and data storage (JSON or Firebase)
- 🧭 Navigation bar component
- 🔍 SEO and performance optimisation

---

## 📄 License

MIT — use it, build on it, remix it. Just give credit where it’s due.

---

## 👋 Author

Built by [@jmossman](https://github.com/jmossman)
