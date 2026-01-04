React Basic Counter 🔢
A lightweight, interactive counter application built with React and Vite. This project serves as a fundamental example of state management using the useState hook.

✨ Features
➕ Increment: Increase the count by 1 with the "ADD" button.

➖ Decrement: Decrease the count by 1 with the "LESS" button.

🔄 Reset: Instantly clear the counter back to 0.

⚡ Real-time Updates: Instant UI updates powered by React State.

📱 Responsive: Works perfectly on both mobile and desktop browsers.

🛠️ Technologies Used
React 19: Utilizing the useState hook for state management.

Vite: For a blazing-fast development environment.

CSS3: Custom styling for the counter card and buttons.

🚀 Getting Started
Prerequisites
Node.js (v18 or higher)

npm

Installation
Clone the repository

Bash

git clone https://github.com/AbdulMateenMiyanoor0711/number-counter-react.js.git
Navigate to the directory

Bash

cd REACT-BASIC-COUNTER
Install dependencies

Bash

npm install
Start the app

Bash

npm run dev
📖 How It Works
This project demonstrates the core concept of State in React.

The counter value is stored in a state variable called count. When a user clicks a button, the setCount function updates the value, triggering React to re-render the component and show the new number instantly.

JavaScript

const [count, setCount] = useState(0);

// Add logic
setCount((count) => count + 1)

// Reset logic
setCount(0)
📦 Available Scripts
npm run dev: Runs the app in development mode.

npm run build: Builds the app for production.

npm run preview: Previews the production build locally.

<div align="center">

Made with ❤️ by Abdul Mateen Miyanoor

⭐ If you like this project, give it a star on GitHub! ⭐

</div>
