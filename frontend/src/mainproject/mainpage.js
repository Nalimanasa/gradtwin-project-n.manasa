import React from 'react'
import {useState ,useEffect } from 'react'
import Main from '../pages/main.js'
import Register from '../components/register.js'
import Userlogin from '../components/userlogin.js'
import Adminlogin from '../components/adminlogin.js'
import admin from '../pages/admin.png'
import Project from './project.js'
import Page from '../pages/page.js'


function Mainpage(){
    const[currentpage ,setCurrentpage]=useState("page")
    const[isAuthenticated,setAuthenticated]=useState(false)
    const[isAdmin,setIsadmin]=useState(false)
    const [loggedRole, setLoggedRole] = useState(null); 


    useEffect(() => {
    const storedAdmin = localStorage.getItem("isAdmin");
    const storedUser = localStorage.getItem("isAuthenticated");

    if (storedAdmin === "true") {
      setIsadmin(true);
      setAuthenticated(true);
      setLoggedRole("Admin");
    }
    else if(storedUser === "true") {
      setAuthenticated(true);
      setIsadmin(false);
      setLoggedRole("User");
    }
  }, [currentpage]);

    const handleNavigation=(pagename)=>{
        setCurrentpage(pagename)
    }

    const handleLogout = () => {
    setAuthenticated(false);
    setIsadmin(false);
    setLoggedRole(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("isAdmin");
    setCurrentpage("signin");
  };
    const renderpage=()=>{
        switch(currentpage){
            case 'home':
                return<Main onNavigate={handleNavigation} />
            case 'project':
             return  isAuthenticated || isAdmin ?(
                             <Project onNavigate={handleNavigation} />
                             ) : (
                             <p style={{ textAlign: "center", color: "red" }}>
                                Please login to access Project.
                                </p>
                             );
            case 'signin':
                 return <Userlogin  onLoginSuccess={() =>{
                localStorage.setItem("isAuthenticated","true");
                setAuthenticated(true)
                 setIsadmin(false)
                 setLoggedRole("User");
                 setCurrentpage("project");
                 }}
                  onNavigate={handleNavigation} />
            case "admin":
                        return<Adminlogin onLoginSuccess={() =>{
                            localStorage.setItem("isAdmin","true");
                            setAuthenticated(true);
                            setIsadmin(true); 
                            setLoggedRole("Admin");
                            setCurrentpage("register");
                         }} onNavigate={handleNavigation} />   
            case 'register':
                return<Register onRegisterSuccess={() => setCurrentpage("signin")} onNavigate={handleNavigation} />
            default:
                return<Page onNavigate={handleNavigation} />                      
        }

    }
    return(
        <div>
           <div style={style.div} >
                <header style={style.header}>
                           <h1>AluX </h1>
                      <nav style={style.nav}>
                       <ul style={style.ul} >
                           <li  style={style.li} onClick={()=>handleNavigation("home")} >
                           HOME
                      </li> 
                    <li style={style.li}
                        onClick={()=>handleNavigation("project")}
                  >PROJECT</li>
                   <li style={style.li}><input style={style.input} type='text' placeholder='search'/></li>
                   
                    {!isAuthenticated && !isAdmin && (
                <>
                  <li style={style.li} onClick={() => handleNavigation("signin")}>
                    SIGN IN
                  </li>
                  <li
                    style={style.li}
                    onClick={() => handleNavigation("register")}
                  >
                    REGISTER
                  </li>
                </>
              )}

              <li style={style.li} onClick={() => handleNavigation("admin")}>
                <img
                  src={admin}
                  alt="adminlogin"
                  style={{ height: "30px", width: "30px", background: "none" }}
                />
              </li>

             {(isAuthenticated || isAdmin) && (
  <li style={style.li} onClick={handleLogout}>LOGOUT</li>
)}
{(isAuthenticated || isAdmin) && (
  <li style={{ ...style.li, color:"greenyellow" }}>
    Logged  <b>{loggedRole}</b>
  </li>
)}
                       </ul>
                      </nav>
                 </header>
        </div><br/><br/><br />
        <span style={style.span}>{renderpage()}
    </span><br/>
        </div>
    )
}

const style={
div:{
    margin:"0px",
    padding:"0px",
    backgroundColor:"greenyellow",
},

header:{
    position: "fixed",
  top: "0",
  width: "100%",
  height: "70px",
  backgroundColor:" #1a3e72",
  color: "white",
  display: "flex",
  justifyContent:" space-between",
  alignItems: "center",
  padding: "0 30px",
  zindex: "1000",
},
nav:{
    display:"flex",
    color:"white",
},
li:{
    display:"flex",
    listStyle:"none",
    padding:"0px 15px",
},
ul:{
    display:"flex",
    padding:"0px 300px",
    margin:"30px",
},
input:{
    padding:"0px",
},
span:{
  overflowY: "auto",
  padding: "-1px 10px 80px ",/* top/bottom padding for header & footer space */
  backgroundColor:" #f9f9f9",
},

}
export default Mainpage ;


