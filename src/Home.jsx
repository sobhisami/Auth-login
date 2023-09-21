const Home = ({setLog}) => {
  let signOut=()=>{
    localStorage.removeItem("token")
    setLog(false)
  }
  return (
    <div>
     hello world
     <br />
     <button onClick={signOut}>signout</button>
    </div>
  )
}

export default Home