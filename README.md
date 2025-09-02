# E-Commerce React (Vite + Tailwind)

Minimal e-commerce demo built with React, Vite, Tailwind CSS and Redux Toolkit. Includes product listing, pagination, cart, breadcrumbs and a simple store structure.

Key files
- [package.json](package.json) — scripts and deps.
- [src/main.jsx](src/main.jsx) — app entry.
- [src/App.jsx](src/App.jsx) — routes.
- [src/Store.js](src/Store.js) — Redux store.
- [src/data.js](src/data.js) — local demo products.
- [src/Slices/AddToCartSlice.js](src/Slices/AddToCartSlice.js) — cart logic (action: [`addtocart`](src/Slices/AddToCartSlice.js)).
- [src/Slices/BreadCrumbSlice.js](src/Slices/BreadCrumbSlice.js) — breadcrumb state (action: [`breadCrumb`](src/Slices/BreadCrumbSlice.js)).
- [src/component/Pagination.jsx](src/component/Pagination.jsx) — client-side pagination component.
- [src/pages/Shop.jsx](src/pages/Shop.jsx) — shop UI using pagination.

Quick start
1. Install
   npm install

2. Run dev server
   npm run dev

3. Build for production
   npm run build

4. Preview build
   npm run preview

Notes
- UI uses Tailwind config: [tailwind.config.js](tailwind.config.js).
- Carousel uses `react-slick` and `slick-carousel`.
- API demo calls use axios to fetch placeholder products (`dummyjson.com`) in components like [src/pages/Home.jsx](src/pages/Home.jsx) and [src/component/Pagination.jsx](src/component/Pagination.jsx).

License
- Project is a demo template. Modify as
