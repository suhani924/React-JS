# 📦 LocalBox Miner (React CRUD App)

A modern **React CRUD application** that allows users to **add, edit, delete, and store records** using **localStorage**.  
It features a **glassmorphism UI**, responsive dashboard, form validation, and real-time statistics.

---

## 🚀 Features

- ➕ Add user records  
- ✏️ Edit existing records  
- 🗑️ Delete records  
- 💾 Persistent storage using **localStorage**  
- 📊 Live dashboard statistics  
- ✅ Form validation  
- 🎨 Premium glassmorphism UI  
- 📱 Fully responsive design  

---

## 🛠️ Tech Stack

- **React (Hooks)**
  - `useState`
  - `useEffect`
- **JavaScript (ES6+)**
- **CSS (Custom Styling)**
- **localStorage API**

---

yaml
Copy code

---

## 🧩 Components Overview

### 🔹 RecordForm.jsx
- Handles user input
- Validations included:
  - Required fields
  - Valid email format
  - 10-digit phone number
  - Age between 1 and 120
- Supports **Add** and **Edit** modes

### 🔹 Dashboard.jsx
- Displays statistics:
  - Total records
  - Last added user
  - Storage type
- Shows user records in a table
- Edit and delete actions

### 🔹 App.jsx
- Main application controller
- Manages global state
- Syncs data with localStorage

---

## 📊 Dashboard Statistics

- **Total Records** – Total number of stored users  
- **Last Added** – Most recently added user  
- **Storage** – Uses browser localStorage  

---

## 💾 Local Storage

All data is stored automatically in the browser using the key:

localbox_records

yaml
Copy code

Records remain saved even after page refresh.

---

## 🎨 UI Highlights

- Glassmorphism cards
- Smooth hover animations
- Gradient buttons
- Animated table rows
- Sticky table header
- Custom scrollbar

---

## 📱 Responsive Design

- Desktop & tablet optimized
- Adaptive grid layout
- Mobile-friendly interactions

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/localbox-miner.git

# Navigate to project folder
cd localbox-miner

# Install dependencies
npm install

# Run development server
npm run dev
