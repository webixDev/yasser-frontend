import React, { useState } from "react";
import { EditService } from "../../Store/ServicesSlice";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Login from "./Login";

const EditServices = () => {
    const [mainTitle, setmainTitle] = useState("");
    const [titleOne, settitleOne] = useState("");
    const [titleTwo, settitleTwo] = useState("");
    const [titleThree, settitleThree] = useState("");
    const [titleFour, settitleFour] = useState("");
    const [price, setprice] = useState("");

    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate()


    const userToken = useSelector((state) => state.LoginSlice.userToken);



      const submitForm = (event) => {
        event.preventDefault();
        const formData = {
            mainTitle,
            titleOne,
            titleTwo,
            titleThree,
            titleFour,
            price,
           
        };
    
        dispatch(EditService({id,formData}))
            .unwrap()
            .then((response) => {
                if (response.error) {
                    alert("Please check your internet connection.");
                } else {
                    setmainTitle("");
                    settitleOne("");
                    settitleTwo("");
                    settitleThree("");
                    settitleFour("");
                    setprice("");
                    alert("Data has been sent successfully.");
                    navigate(`/admin/partner`)
                }
            })
            .catch((error) => {
                alert("An error occurred while sending data: " + (error.message || "Unknown error"));
            });
    };
    
  
    return (
        <>
            {userToken? <div className="Body-Admin">
          
                <form onSubmit={submitForm}>
                    <div className="Content">
                        <input
                            value={mainTitle}
                            onChange={(e) => setmainTitle(e.target.value)}
                            
                            type="text"
                            placeholder="اسم الباقه"
                        />
                        <input
                            value={titleOne}
                            onChange={(e) => settitleOne(e.target.value)}
                            
                            type="text"
                            placeholder="الخدمه الاولي"
                        />
                        <input
                            value={titleTwo}
                            onChange={(e) => settitleTwo(e.target.value)}
                            
                            type="text"
                            placeholder="الخدمه الثانيه"
                        />
                        <input
                            value={titleThree}
                            onChange={(e) => settitleThree(e.target.value)}
                            
                            type="text"
                            placeholder="الخدمه الثالثه"
                        />
                        <input
                            value={titleFour}
                            onChange={(e) => settitleFour(e.target.value)}
                            
                            type="text"
                            placeholder="الخدمه الرابعه"
                        />
                        <input
                            value={price}
                            onChange={(e) => setprice(e.target.value)}
                            
                            type="number"
                            placeholder="السعر"
                        />
                    </div>
                    <div className="Sender">
                        <button type="submit">ارسل البيانات</button>
                    </div>
                </form>
            </div>:<Login/>}
        </>
    );
};

export default EditServices;
