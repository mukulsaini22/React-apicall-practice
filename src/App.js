import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {

 const [Comments,setComments] = useState({})
 const [Id,setId] =useState(1)

 useEffect(()=>{

  axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`).then(res=>
  setComments(res.data)).catch(err=>console.log(err))
 },[Id])


  return (
    <div className="App">
      

    <h1>
  enter id

    </h1>
     <input   type='text' value={Id} onChange={e=>setId(e.target.value)} />   
     <div className="title">
       <h1>{Comments.title}
       </h1></div>
     
     </div>
  );
}

export default App;
