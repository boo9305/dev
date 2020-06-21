import React, {useState} from 'react';
import axios from 'axios'
function App() {
  const [token , setToken] = useState("")

  return (
    <div className="App">
      <div>
        <input type='button' value='[get] Posts' onClick={() => {
          axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          }
          axios.get('/file_server/posttest/')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }}></input>
      </div>

      <div>
        <input type='button' value='[post] Posts' onClick={() => {
          axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          }
          console.log(token)

          axios.post('/file_server/posttest/', {    
            title: "test1",
            contents : "test2"
          }).then(res => {console.log(res)} )
          .catch(err => {console.log(err)} )

        }}></input>
      </div>

      <div>
        <input type='button' value='login' onClick={() => {
          console.log(axios.defaults)
          axios.defaults.headers = {}
          axios.post('/rest-auth/login/' , {
            username : 'join5' , password : 'ghks9305'
          })
          .then(res => {
            setToken(res.data.key)
            console.log(res.data)
          })
          .catch(err => console.log(err))
        }}></input>
      </div>

      <div>
        <input type='button' value='logout' onClick={() => {
          //setToken(null)
          axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          }
          axios.post('/rest-auth/logout/')
          .then(res => {
            console.log(res.data)})
          .catch(err => console.log(err))
        }}></input>
      </div>

    </div>
  );
}

export default App;
