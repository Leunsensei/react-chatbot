import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages  from './components/ChatMessages';
import './App.css'

function App() { 
  const [chatMessages, setChatMessages] = useState([{
          message: 'hello chatbot',
          sender: 'user',
          id: '1',
       }, {
          message: 'hello human',
          sender: 'robot',
          id: '2',
      }, {
          message: 'get todays date',
          sender: 'user',
          id: '3',
      }, {
          message: 'Today is March 2',
          sender: 'robot',
          id: '4',
      }]);
      // const [chatMessages, setChatMessages] = array;
      // const chatMessages = array[0];
      // const setChatMessages = array[1];


  return (
<div className="app-container"> 
      
      <ChatMessages
      chatMessages={chatMessages}
      />
      
      <ChatInput 
       chatMessages={chatMessages}
       setChatMessages={setChatMessages}
      />
  </div>)
  }    

export default App
