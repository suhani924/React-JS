# 📝 Redux Builder App

A simple and beginner‑friendly **Task Manager application** built using **React.js** and **Redux Toolkit**. This project demonstrates how to manage global state, perform CRUD operations, and persist data using **localStorage**.

---

## 🚀 Project Overview

**Redux Builder App** allows users to:

* Add new tasks
* Mark tasks as completed
* Delete tasks
* Persist tasks even after page refresh (using localStorage)

This project is ideal for students and beginners who want to understand **Redux Toolkit workflow** in a practical way.

---

## 🛠️ Tech Stack

* **React.js** – UI library
* **Redux Toolkit** – State management
* **React Redux** – Binding Redux with React
* **Tailwind CSS** – Styling
* **LocalStorage** – Data persistence

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── TaskList.jsx
│   └── taskSlice.js
│
├── app/
│   ├── store.js
│   └── localStorage.js
│
├── App.jsx
├── main.jsx
```

---

## 🔄 Redux Flow (How It Works)

1. **UI (TaskList.jsx)** dispatches actions like `addTask`, `toggleTask`, `deleteTask`
2. **taskSlice.js** handles state updates using reducers
3. **store.js** combines reducers and initializes Redux store
4. Tasks are **saved to localStorage** whenever state changes
5. On reload, tasks are **loaded from localStorage** into Redux store

---

## 📦 Installation & Setup

1. Clone the repository

```bash
git clone (https://github.com/hiyashah-1510)
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

---

## 🧩 Key Features

* ⚡ Fast state updates using Redux Toolkit
* 💾 Automatic task persistence with localStorage
* 🧠 Clean and understandable Redux architecture
* 🎨 Responsive UI with Tailwind CSS

---

## 📸 Screenshots

<img width="847" height="603" alt="image" src="https://github.com/user-attachments/assets/5b0b9cd7-00b8-46f7-9d9a-3a4bdf710cbf" />


---

## 🎯 Learning Outcomes

* Understanding Redux Toolkit slices
* Using `useSelector` and `useDispatch`
* Managing global state in React
* Persisting Redux state with localStorage


---

## 👤 Author

**Hiya Shah**
