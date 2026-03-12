import { useState, useRef, useEffect } from 'react';
import { Chatbot } from 'supersimpledev';
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';
import { ChatInput } from './components/ChatInput';

import './App.css'


function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const {message,sender}=props;

  // if (sender === 'chatbot') {
  //     return (
  //         <div>
  //             <img src="robot.png" width="50" />
  //             {message}
  //         </div>
  //     );
  // }

  return (
    <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
      {sender === 'chatbot' && <img src={RobotProfileImage} className="chat-message-profile" />}
      <div className="chat-message-text">{message}</div>

      {sender === 'user' && <img src={UserProfileImage} className="chat-message-profile" />}
    </div>
  );
}

function ChatMessages({ chatMessages }) {

  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div ref={chatMessagesRef}>
      {
        chatMessages.map((chatmessage) => {
          return (
            <ChatMessage
              message={chatmessage.message}
              sender={chatmessage.sender}
              key={chatmessage.id}
            />
          );
        })
      }
    </div>
  )


}

function App() {

  const [chatMessages, setChatMessages] = useState([]);
  // const[chatMessages,setChatMessages]=array;
  // const chatMessages=array[0];
  // const setChatMessages=array[1];
  // const chatmessageComponents = 
  return (
    <div className="app-container">
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages
        chatMessages={chatMessages}
      />
    </div>
  );
}

export default App
