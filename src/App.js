import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import io from 'socket.io-client'
import Login from './page/auth/Login'
import Register from './page/auth/Register'
import ChatRoom from './page/main/ChatRoom'
import Dashboard from './page/main/Dasboard'

function App() {
  const [socket, setSocket] = useState(null)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  
  const setupSocket = ()=>{
    console.log('hello');
    const newSocket = io("http://localhost:4567")
    // console.log(newSocket);
    // newSocket.on("connect", ()=>{
    //   console.log('connect');
    // })
    setSocket(newSocket)
  }

  useEffect(()=>{
    setupSocket()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  return (
  <BrowserRouter>
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/chatroom/:room" render={(props) => <ChatRoom {...props} socket={socket}/>} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} socket={socket}/>} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
