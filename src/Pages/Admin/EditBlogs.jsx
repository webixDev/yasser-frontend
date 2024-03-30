import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { EditBlog } from "../../Store/BlogsSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Login from "./Login";

const EditBlogs = () => {

  
    const [title, setTitle] = useState("");
    const [img, setimg] = useState("");
    const [desc, setDescription] = useState("");

    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate()
  
    const userToken = useSelector((state) => state.LoginSlice.userToken);

 
    const submitForm = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('img', img);
        formData.append('desc', desc);


        dispatch(EditBlog({id,formData}))
            .unwrap()
            .then((response) => {
                if (response.error) {
                    alert("Please check your internet connection.");
                } else {
                    setTitle(""); // Clear the input fields after successful submission
                    setimg("");
                    setDescription("");
                    alert("Data has been edit successfully.");
                    navigate("/admin")
                }
            })
            .catch((error) => {
                alert("An error occurred while sending data: " + (error.message || "Unknown error"));
            });
    };
    return (
        <>
            {userToken ? <div className="Body-Admin">
                <div className="Admin-Section">
                    <div className="Head-Txt">
                        <h4>المدونه</h4>

                    </div>

                </div>
                <form onSubmit={(event) => { event.preventDefault(); submitForm(); }}>
                    <div className="Content">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            
                            type="text"
                            placeholder="اسم المنتج"
                        />
                        <input
                            value={desc}
                            onChange={(e) => setDescription(e.target.value)}
                            
                            type="text"
                            placeholder="وصف المنتج"
                        />
                        <input
                            onChange={(e) => setimg(e.target.files[0])}
                            
                            type="file"
                            placeholder="الصورة"
                            className="drop-container"
                        />
                    </div>
                    <div className="Sender">
                        <button type="submit">ارسل البيانات</button>
                    </div>
                </form>
            </div>
                : <Login />}
        </>
    )
}

export default EditBlogs