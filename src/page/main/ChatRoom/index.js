import React, { useEffect, useState } from 'react'
import qs from 'query-string'

function ChatRoom({ match, location, socket }) {
  // console.log(location);
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const urlQuery = qs.parse(location.search)
    setUsername(urlQuery.username)

    if(socket){
      socket.on('receiverMessage', (dataMessage) => {
        setMessages([...messages, dataMessage])
      })
    }
    
  }, [socket, messages])

  useEffect(()=>{
    const urlQuery = qs.parse(location.search)
    const room = match.params.room
    if(socket){
      socket.emit('initialRoom', { namaRoom: room, username: urlQuery.username})
    }
    // component unmount
    // return () => {
    //   if (socket) {
    //     const room = match.params.room
    //     socket.emit('leftRoom', {
    //       username: username,
    //       namaRoom: room
    //     })
    //   }
    // }
  }, [socket])
  
  const handleSendMessage = ()=>{
    const room = match.params.room
    // const dataMessage = {}
    socket.emit('sendMessage', {
      username: username,
      message: message,
      room: room
    })
  }
  return (
    <div className="container">
      <h1 className="text-center mb-5">halaman ChatRoom : {match.params.room}</h1>
      <div className="row">
        <div className="col-md-4">
          <ul class="list-group">
            <li class="list-group-item disabled" >List User</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
         
        </div>
        <div className="col-md-8">
          <div className="wrapper-chat">
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">ISI Message</li>
            {messages.map((item, index)=>
              <li className={`list-group-item ${username === item.username ?  'text-left': 'text-right'}`} key={index}>{item.username+" : "+item.message +' | '+item.time}</li>
            )}
          </ul>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" onChange={(e)=>setMessage(e.target.value)} />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSendMessage}>Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom
