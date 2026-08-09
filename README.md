<div align="center">

# 📱 Nice Gadgets — React Product Catalog

A responsive e-commerce style product catalog for browsing phones, tablets, and accessories.
Built with React and TypeScript, with product filtering, sorting, pagination, favourites, cart functionality, product details, and theme switching.

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](#)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)](#)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=reactrouter&logoColor=white)](#)
[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white)](#)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](#)

[Live Demo](#live-demo) · [Features](#features) · [Technologies](#technologies) · [Installation](#installation-and-usage)

</div>

---

## About

**Nice Gadgets** is a responsive online store interface for browsing mobile phones, tablets, and accessories.

The application contains a home page with promotional and product sliders, category pages with sorting and pagination, detailed product pages, favourites, and a shopping cart.

The project was built as a React Product Catalog task and follows the provided design and functional requirements.

---

## Live Demo

[Open the live website](https://luchali.github.io/react-app_phone-catalog/)

---

## Features

- Responsive layout for mobile, tablet, and desktop devices
- Light and dark theme switching
- Sticky header with navigation
- Promotional image slider
- Brand new products carousel
- Hot prices products carousel
- Shop by category section
- Separate catalog pages for phones, tablets, and accessories
- Sorting by newest, alphabetically, and cheapest
- Pagination and configurable items per page
- Product details page
- Product image gallery
- Available color and capacity selection
- Product technical specifications
- Breadcrumb navigation
- Browser-like Back button
- “You may also like” product suggestions
- Favourites functionality
- Shopping cart functionality
- Product quantity controls
- Automatic cart total calculation
- Cart and favourites counters in the header
- Data persistence with `localStorage`
- Custom not-found states
- Smooth hover effects and transitions

---

## Technologies

| Technology | Purpose |
|---|---|
| React | Component-based UI development |
| TypeScript | Static typing |
| React Router | Client-side routing |
| Context API | Cart and favourites state management |
| Vite | Development server and build tool |
| SCSS | Styling and responsive layouts |
| CSS Modules | Component-scoped styles |
| LocalStorage | Persistence for cart and favourites |
| Cypress | End-to-end testing |
| ESLint | Code quality |
| Prettier | Code formatting |
| GitHub Pages | Project deployment |

---

## Main Pages

### Home

- Main promotional slider
- Brand new models
- Hot prices
- Shop by category
- Product carousels

### Product Catalog

Users can:

- Browse phones, tablets, and accessories
- Sort products
- Change the number of items per page
- Navigate through pagination
- Open product details
- Add products to favourites
- Add products to the cart

### Product Details

The product details page includes:

- Product photo gallery
- Available colors
- Available capacities
- Current and full prices
- Add to cart button
- Add to favourites button
- Technical specifications
- Breadcrumb navigation
- Suggested products

### Favourites

Users can save products to a favourites list and see the total number of saved items in the header.

### Shopping Cart

The cart supports:

- Adding and removing products
- Changing item quantity
- Automatic total price calculation
- Cart item counter
- Persistence after page reload

---

## URL State

Sorting and pagination can be stored in URL search parameters.

```text
?sort=age
?page=2&perPage=8
```

This allows the catalog state to be preserved after page reload.


## Responsive Design

The application is optimized for:

- Mobile devices
- Tablets
- Desktop screens

Navigation, product grids, sliders, cards, typography, and product details adapt to different viewport sizes.

---

## Installation and Usage

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_LINK
cd react-app_phone-catalog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

If your project uses the default Vite script:

```bash
npm run dev
```

### 4. Run linters

```bash
npm run lint
```

### 5. Run tests

```bash
npm test
```

### 6. Build the project

```bash
npm run build
```

---

## Task Reference

This project was developed according to the Mate Academy React Product Catalog task:

`https://github.com/mate-academy/react_phone-catalog`

The task covers catalog pages, product details, sorting, pagination, shopping cart, favourites, responsive design, and advanced UI features.

---

## Author

Frontend project created as a React e-commerce portfolio project.

---

<div align="center">

If you found this project useful, consider giving it a star ⭐

</div>
