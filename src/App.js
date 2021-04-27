import React, {useEffect, useState} from 'react'
import io from 'socket.io-client'

function App() {
  const [socket, setSocket] = useState(null)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const setupSocket = ()=>{
    console.log('hello');
    const newSocket = io("http://localhost:4567")
    console.log(newSocket);
    newSocket.on("connect", ()=>{
      console.log('connect');
    })
    setSocket(newSocket)
  }
  useEffect(()=>{
    setupSocket()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  useEffect(() => {
    if (socket){
      socket.on('recMessage', (data) => {
        // const dataMessage = messages
        // dataMessage.push(data)

        setMessages([...messages, data])
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, messages])

  const handleClick = ()=>{
    socket.emit('kirimMessage', message)
    setMessage('')
  }

  return (
  <div>
    <h1>halaman utama</h1>
    <ul>
      {messages.map((item, index)=>
        <li key={index}>{item}</li>
      )}
    </ul>
      <input type="text" name="message" id="message" value={message} placeholder="Kirim Message" onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={handleClick}>kirim message</button>
  </div>
  );
}

export default App;
