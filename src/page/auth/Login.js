import React, {useState} from 'react'
import './auth.css'

function Login(props) {
const [username, setUsername] = useState("")
const [room, setRoom] = useState("")

const handleSubmit = ()=>{
  props.history.push(`/chatroom/${room}?username=${username}`)
}
  return (
    <div className="container">
      <div className="wrapper">

        <h1>halaman login</h1>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUsername(e.target.value)} />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Room</label>
            <select className="form-control" onChange={(e)=>setRoom(e.target.value)}>
              <option value="">Pilih room</option>
              <option value="javascript">Javascript</option>
              <option value="php">PHP</option>
              <option value="golang">Golang</option>
            </select>
            {/* <input type="password" class="form-control" id="exampleInputPassword1" /> */}
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Login
