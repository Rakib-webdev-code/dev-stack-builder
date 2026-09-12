# 🧱 Dev Stack Builder


## 📖 About The Project

Dev Stack Builder is a responsive web application that helps developers explore popular web technologies and build their own development stack. Users can view technology details, add technologies to their stack, remove individual items, or clear the entire stack.


## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Icons
- React Toastify
- JSON
- Git & GitHub


## ✨ Features

- 🔍 **Explore Technologies** — Browse popular web technologies with their category, description, difficulty, rating, and badge.
- 🧰 **Build Your Own Stack** — Add your favorite technologies to a personal stack and see the selected items in the sidebar.
- 🔄 **Manage Your Stack** — Prevent duplicate technologies, remove individual items, or clear the entire stack with interactive notifications.


### 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. React uses JSX to describe how the UI should look. It makes components easier to create, read, and organize, and it also allows us to use JavaScript logic and conditions directly in the UI.



### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time. Props are read-only, while state can be updated.


### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component. In this project, I used it in `App.tsx` to store and update the selected technologies in the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data from an API. In this project, I did not use `useEffect` to load the JSON data. Instead, I used React's `use()` with `Suspense` to handle the JSON promise and loading state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently track changes and update only the necessary items when the list changes.


### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI elements based on a condition. In this project, I used it in the Stack Sidebar to show an empty message when no technology is selected, and show the selected technologies when the stack has items.


### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component through props. To send information or an action back to the parent, the parent can pass a function as a prop, and the child can call that function. In this project, I used this pattern to add and remove technologies from the user's stack.
