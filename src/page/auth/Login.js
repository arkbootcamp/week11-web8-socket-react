import React, {useState} from 'react'
import './auth.css'

function Login(props) {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = ()=>{
  let idUser = null
  if(username === 'admin' && password ==='admin'){
    idUser = 1
    localStorage.setItem('id', idUser)
  } else if(username === 'banu' && password === 'banu'){
    idUser = 3
    localStorage.setItem('id', idUser)
  }
  props.history.push('/chatroom/')
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
            <label for="exampleInputEmail1">Password</label>
            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Login
