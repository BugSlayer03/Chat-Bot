# Chat-Bot
A simple chatbot web application built using **React, HTML, CSS, and JavaScript**. This project demonstrates core React concepts like components, props, state management, and event handling while creating an interactive chat interface.

## 🚀 Features

- User and chatbot message interaction  
- Dynamic message rendering using React components  
- Auto-scrolling chat window  
- Unique message IDs using `crypto.randomUUID()`  
- Clean and responsive UI design  
- Instant chatbot responses using `supersimpledev` package  

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Framework:** React (Vite)  
- **Library:** supersimpledev  

## 📂 Project Structure

```
chatbot-project/
├── public/
├── src/
│   ├── assets/
│   │   ├── robot.png
│   │   ├── user.png
│   ├── components/
│   │   └── ChatInput.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
├── index.html
├── package.json
```

## ⚙️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/BugSlayer03/Chat-Bot
```

2. Navigate to the project folder:
```bash
cd chatbot-project
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open in browser:
```
http://localhost:5173
```

## 💡 How It Works

- User enters a message in the input field  
- Message is stored in state using `useState`  
- Chatbot generates a response using `Chatbot.getResponse()`  
- Both messages are displayed dynamically in the UI  
- `useEffect` ensures auto-scrolling to the latest message  

## 🔗 Future Improvements

- Integrate real AI API (like OpenAI)  
- Add typing animation  
- Store chat history  
- Improve UI with better styling and themes  
