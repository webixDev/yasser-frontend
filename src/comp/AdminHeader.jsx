import "../App.css"
import { useState } from "react"
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
    const [ShowNAv,setShowNav] = useState(false)
 
     const delToken = ()=> {
        localStorage.removeItem("userToken");
        window.location.href = "/";
     }

    return (
        <>
            <div className="Admin-Header">
                <div className={ShowNAv? "Side-Bar ShowSide ":"Side-Bar"} >
                    <div className={ShowNAv? "Head-Txt":"None"}>
                        <h3>Webix</h3>
                        <div onClick={()=>setShowNav(false)} className="Close-Side">x</div>
                    </div>
                    <div className="Content">
                        <ul>
                            <li>
                                <NavLink to={"admin"} onClick={()=> setShowNav(false)}>المدونه</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/analysis"} onClick={()=> setShowNav(false)}>التحليلات</NavLink>
                            </li>
                            <li> <NavLink to={"admin/partner"} onClick={()=> setShowNav(false)}>الباقات</NavLink></li>
                            <li> <NavLink to={"admin/email"} onClick={()=> setShowNav(false)}>البريد</NavLink></li>
                            <li onClick={()=> delToken()}>تسجيل الخروج</li>

                        </ul>
                    </div>
                </div>
                <div className="Admin-Bar">
                    <h6> dasboard from <span>Webix</span></h6>
                    <i onClick={()=>setShowNav(!ShowNAv)} className="fa-solid fa-bars "  ></i>
                </div>
            </div>
        </>
    )
}

export default AdminHeader