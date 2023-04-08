import { useState, useRef , useEffect } from "react";
import "./App.css";
import ClipLoader from "react-spinners/ClipLoader";
import Userinfo from "./components/Userinfo";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const getLocalItem=()=>{
  let list=localStorage.getItem('g_list')
  if(list) return JSON.parse(list)
  return []
}

function App() {
  const [allUsers, setAllUsers] = useState(getLocalItem());
  const [loading, setLoading] = useState(false);
  const [color] = useState("#0000ff");
  const [showModal, useShowModal] = useState(false);
  const [showModal2, useShowModal2] = useState(false);

  useEffect(()=>{
    localStorage.setItem('g_list',JSON.stringify(allUsers))
  },[allUsers])

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading((prev) => !prev);
    const inputValue = inputRef.current.value;
    fetch(`https://api.github.com/users/${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Not Found') {
          // console.log("showmodal")
          useShowModal(true)
        }
        else
          setAllUsers((prev) => [...prev, data]);
        // console.log("data=>", data);
        setLoading((prev) => !prev);
        // console.log("allUsers=>",allUsers)
        inputRef.current.value = ""
      });
  };
  
  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const handleClose = (id) => {
    setAllUsers(prev => prev.filter(user => user.id != id))
  }

  const deleteAll=()=>{
    if(allUsers.length>0){
      setAllUsers([])
    }
    else{
      useShowModal2(true)
    }
  }

  return (
    <>
    {showModal&&<Modal useShowModal={useShowModal} inputRef={inputRef}/>}
    {showModal2&&<Modal2 useShowModal2={useShowModal2} inputRef={inputRef}/>}
    <Navbar deleteAll={deleteAll}/>
      <div className="App">
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              ref={inputRef}
            ></input>
            <input type="submit" value="Add" />
          </form>
        </div>
        {loading ? (
          <ClipLoader
            color={color}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div className="container">
            {allUsers.map((use,index) => {
              return (<Userinfo use={use} key={use.id} handleClose={handleClose} last={index===allUsers.length-1}/>)
            })}
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default App;
