# 🛍️ E-Commerce React Template

> A modern, high-performance e-commerce platform built with **React 19**, **Vite**, **Tailwind CSS**, and **Redux Toolkit**. Perfect for startups, agencies, and developers looking for a production-ready foundation.

[![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-06b6d4?logo=tailwindcss)](https://tailwindcss.com)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.8.2-764abc?logo=redux)](https://redux-toolkit.js.org)

---

## ✨ Features

- 🚀 **Lightning-Fast Performance** - Built with Vite for instant HMR and optimized builds
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS and responsive components
- 🛒 **Complete Shopping Cart** - Add/remove products with Redux state management
- 📄 **Smart Pagination** - Efficient product listing with client-side pagination
- 🧭 **Breadcrumb Navigation** - Enhanced UX with visual navigation hierarchy
- 📱 **Fully Responsive** - Mobile-first design, works perfectly on all devices
- 🗺️ **Google Maps Integration** - Location-based services included
- 🎠 **Image Carousels** - Smooth product showcases with Swiper & React Slick
- 🔍 **Search Functionality** - Built-in search bar for easy product discovery
- ⚡ **Optimized Performance** - Lazy loading, code splitting, and optimized bundles
- 📊 **State Management** - Centralized Redux store for predictable app flow
- 🎯 **Developer Friendly** - Clean, well-organized code with ESLint configured

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Styling & utility-first CSS |
| **Redux Toolkit** | State management |
| **React Router v7** | Client-side routing |
| **Axios** | HTTP requests |
| **React Icons** | Icon library |
| **Swiper** | Touch sliders & carousels |
| **React Slick** | Advanced carousel component |
| **React Paginate** | Pagination component |
| **ESLint** | Code quality & linting |

---

## 📋 Project Structure

```
src/
├── component/           # Reusable UI components
│   ├── BestSeller.jsx
│   ├── Card.jsx        # Product card component
│   ├── Catagory.jsx    # Category filter
│   ├── Pagination.jsx  # Smart pagination
│   ├── Button.jsx
│   ├── Navbar.jsx      # Navigation bar
│   └── ...other components
├── layouts/            # Page layouts
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Searchbar.jsx
│   └── Rootlayouts.jsx
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Shop.jsx        # Product listing
│   ├── ProductDetails.jsx
│   ├── Cart.jsx        # Shopping cart
│   ├── Checkout.jsx    # Checkout flow
│   ├── About.jsx
│   ├── Contacts.jsx
│   ├── Journal.jsx
│   └── ...other pages
├── Slices/             # Redux slices
│   ├── AddToCartSlice.js
│   └── BreadCrumbSlice.js
├── Store.js            # Redux store configuration
├── data.js             # Demo/mock data
├── App.jsx             # Main app component & routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16+ 
- **npm** v7+ or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahadihasandev/E-commerce-React-Tailwind.git
   cd E-commerce-React-Tailwind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📜 Available Scripts

```bash
npm run dev       # Start development server with HMR
npm run build     # Build for production (optimized & minified)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint to check code quality
```

---

## 🎯 Core Features Explained

### 🛒 Shopping Cart
- Add/remove products with one click
- Real-time cart updates using Redux
- Persistent state management
- Cart summary with totals

### 📄 Pagination System
- Efficient product browsing
- Customizable items per page
- Smooth page transitions
- SEO-friendly structure

### 🧭 Breadcrumb Navigation
- Visual navigation hierarchy
- Improves UX and SEO
- Dynamic breadcrumb updates
- Easy navigation back

### 📊 State Management
Redux Toolkit slices handle:
- Cart operations (add, remove, update)
- Breadcrumb navigation state
- User session data
- Filter and sorting states

---

## 🔧 Customization Guide

### Add Your Products
Edit `src/data.js`:
```javascript
export const products = [
  {
    id: 1,
    name: "Your Product",
    price: 99.99,
    image: "image-url",
    category: "electronics",
    // Add more fields as needed
  },
  // ...
];
```

### Modify Styling
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific: Use Tailwind classes directly

### Connect Real Backend API
Replace mock data with API calls in `src/component/Pagination.jsx`:
```javascript
// Replace dummyjson.com with your API endpoint
const response = await axios.get('https://your-api.com/products');
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

### Deploy to GitHub Pages
Update `vite.config.js` and build, then push to gh-pages branch.

---

## 📱 Responsive Design

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1440px+)

All components are fully responsive and mobile-optimized.

---

## 🔍 SEO Optimized

- Semantic HTML structure
- Meta tags ready
- Performance optimized (Lighthouse ready)
- Mobile-friendly design
- Fast page load times

---

## 📦 Dependencies at a Glance

**Core:**
- `react@^19.1.0` - UI library
- `react-dom@^19.1.0` - DOM rendering
- `react-router-dom@^7.6.2` - Routing

**State & Data:**
- `@reduxjs/toolkit@^2.8.2` - State management
- `react-redux@^9.2.0` - React-Redux bindings
- `axios@^1.11.0` - HTTP client

**UI & Styling:**
- `tailwindcss@^3.4.17` - CSS framework
- `react-icons@^5.5.0` - Icon library
- `react-slick@^0.31.0` - Carousel
- `swiper@^11.2.10` - Touch slider

**Utilities:**
- `react-paginate@^8.3.0` - Pagination
- `google-map-react@^2.2.5` - Maps integration
- `@react-google-maps/api@^2.20.7` - Google Maps

---

## 🛡️ Code Quality

- ✅ ESLint configured for code consistency
- ✅ Vite for optimal build performance
- ✅ Production-ready code splitting
- ✅ Optimized bundle size

Run linter:
```bash
npm run lint
npm run lint -- --fix
```

---

## 🤝 Contributing

This is a template project. Feel free to:
- Fork and customize
- Add new features
- Improve performance
- Enhance UI/UX

---

## 📄 License

This project is open for commercial and personal use. Modify and distribute as needed.

---

## 💡 Use Cases

Perfect for:
- ✨ E-commerce startups
- 🏪 Online stores
- 📱 Mobile-first shops
- 🎯 MVP development
- 🔧 Learning React & Redux
- 🚀 Portfolio projects

---

## 🆘 Support

For questions or issues:
- Check the code comments
- Review component structure
- Check Redux Toolkit documentation
- Refer to React best practices

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

**Made with ❤️ by developers, for developers.**

⭐ If you find this useful, please consider giving it a star!
