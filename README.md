# 🛒 React E-Commerce Website

A modern e-commerce website built using React + React Router + Vite, based on the Karma ThemeWagon HTML Template.
Includes product listing, dynamic product details, 3D product viewer, and mobile-friendly UI.

# 🎨 Template Used

This project is built on top of the Karma free e-commerce template:

🔗 https://themewagon.github.io/karma/

All HTML sections were converted into React components while keeping the original design consistent.

# 🚀 Features
🛍️ Product Listing Page

Grid view of all products

Prices, old prices, images

“View More” button → navigates to details page

🔍 Product Details Page

Shows product name, price, category, availability, description

Quantity selector

Add to Cart button

3D model viewer using <model-viewer> (Google Web Component)

🧭 Dynamic Routing

/product/:id loads product info dynamically

Product.js contains all product data

🎥 3D Model Viewer

Toggle between Image View and 3D GLB Model View

# 📁 Project Folder Structure
tech-essentials/
│── public/
│   ├── assets/
│   │   ├── img/
│   │   ├── models/
│── src/
│   ├── components/
│   ├── pages/
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   ├── data/
│   │   ├── Product.js
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── package.json
│── README.md


# 📦 Tech Stack
| Technology                | Use                |
| ------------------------- | ------------------ |
| **React**                 | UI Framework       |
| **Vite**                  | Fast Dev Server    |
| **React Router DOM**      | Page Navigation    |
| **Bootstrap / Karma CSS** | Styling            |
| **model-viewer**          | 3D Model Rendering |

# ▶️ How to Run the Project Locally
1️⃣ Clone the repository
git clone https://github.com/yourname/tech-essentials.git

2️⃣ Go into project folder
cd frontend

3️⃣ Install dependencies
npm install

4️⃣ Start local development server
npm run dev

✔️ Your project will run at:
http://localhost:5173/

# 🔧 Required for 3D Model Viewer

Add this script into your index.html:

<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>


Use .glb models from:

public/assets/models/


Example:

<model-viewer
  src="/assets/models/shoes.glb"
  auto-rotate
  camera-controls
></model-viewer>

# 📄 License

This project uses the free Karma template from ThemeWagon.
This project is open-source for learning and portfolio use.

# 📌 Author

🔥 Developed by: Mahajabin Akter Ritu
