import './style.css'
import logoGamer from '../../images/logoGamer.png'
import backtic from '../../images/backtic.png'
import vector from '../../images/vector.svg'
import back from '../../images/back.png'
import { Input, Label } from '../../Component'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from '../../Home'
const Login = () => {
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("")
  let [repassword,setRePassword]=useState("")
  let [log,setLog]=useState(false)
  let data={email,password,repassword}
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLog(true);
    }
  }, []);

  let submitHandle=(e)=>{
    e.preventDefault()
    axios.post("https://reqres.in/api/login",data,{
      headers: {
        "Authorization":`Bearer ${localStorage.getItem("token")}`,
      }
  })
    .then((response)=>{
         if (check()) {
          alert('success', response)
          let token =response.data.token
          localStorage.setItem("token",token)
          setLog(true)
          empty();
         }
      })
    .catch(err=>{
      alert(err.response.data.error)
    })
  }
  let empty=()=>{
    setEmail("");
    setPassword("");
  }
  let check=()=>{ 
    if(!email||!password){
      alert("please fill all fields");
      return false
    }
   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email).toLowerCase())){
   alert ("Please enter a valid email address."); 
   return false
  } 
  else if (password!==repassword) {
    alert ('passwords do not match')
    return false
  }
  else {
    return true
  }
  }
  return (
    <>
    {
      log ? <Home setLog={setLog}/> :      <section className="login">
      <div className="login-left">
        <article>
          <img src={logoGamer}alt="logoGamer" />
          <span>Gamers</span>
        </article>
        <article>
          <img src={backtic} alt="backtic" />
          <p>
          I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
          </p>
          <span>Hideo Kojima</span>
        </article>
        <div><img src={vector} alt="vector" /></div>
      </div>
      <div className="login-right">
           <article>
             <div className='container-small'>
               <div className='back'>
                <img src={back}alt="back" />
                <span>Back</span>
               </div>
             </div>
          </article>
        <section className='container'>
          <article>
            <h2>Register Individual Account!</h2>
            <p className='title-form'>For the purpose of gamers regulation,  your  <br /> details are required.</p>
            <form onSubmit={submitHandle}>
            <div className='colum'>
              <Label  htmlFor="email">Email address*</Label>
              <Input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Enter email address"/>
            </div>
            <div className='colum'>
              <Label  htmlFor="password">Create password*</Label>
              <Input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="password"/>
            </div>
            <div className='colum'>
              <Label  htmlFor="Repeat password">Repeat password*</Label>
              <Input value={repassword} onChange={(e)=>setRePassword(e.target.value)} type="password" name="Repeat password" id="Repeat password" placeholder="Repeat password"/>
            </div>
            <div className='row'>
              <Input type="checkbox" name="agree" id="agree" placeholder="agree"/>
              <Label  htmlFor="agree">I agree to terms & conditions</Label>
            </div>
              <div className='sub'>
                <button type="submit"  >Register Account</button>
              </div>
              <div className='sub' >
                <button type='submit' className='sub-two' >login</button>
              </div>
            </form>
          </article>
        </section>
      </div>
    </section>
    }
    </>
  )
}

export default Login
