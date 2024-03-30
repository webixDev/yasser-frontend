import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";

import { AllBlog,AddBlog,deleteBlog } from "../../Store/BlogsSlice";
import { Link, useNavigate } from "react-router-dom";

import Login from "./Login";

const Admin = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [img, setimg] = useState("");
    const [desc, setDescription] = useState("");

    const { blogs, page, limit } = useSelector((state) => state.Blogs);
    const navigate = useNavigate()

    const userToken = useSelector((state) => state.LoginSlice.userToken);
 useEffect(() => {
    document.body.dir = "rtl"
    dispatch(AllBlog());
  }, [dispatch]);

  const nextPage = () => {
    if (blogs && blogs.data.length === limit) {
      dispatch(AllBlog(page + 1));
    }
  };
  
  const prevPage = () => {
    if (page > 1) {
      dispatch(AllBlog(page - 1));
    }
  };

    const submitForm = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('img', img);
        formData.append('desc', desc);


        dispatch(AddBlog(formData))
            .unwrap()
            .then((response) => {
                if (response.error) {
                    alert("Please check your internet connection.");
                } else {
                    setTitle(""); // Clear the input fields after successful submission
                    setimg("");
                    setDescription("");
                    dispatch(AllBlog());
                    alert("Data has been sent successfully.");
                }
            })
            .catch((error) => {
                alert("An error occurred while sending data: " + (error.message || "Unknown error"));
            });
    };
    return (
        <>
         {userToken ?    <div className="Body-Admin">
                <div className="Admin-Section">
                    <div className="Head-Txt">
                        <h4>المدونه</h4>
                     
                    </div>
                    <div className="Cards">
                    {blogs?.data.map((Blog) => (
                       
                        <div className="Card" key={Blog._id} >
                                    <div className="Box-Img" >
                                        <img src={`${process.env.REACT_APP_API_URL}/${Blog.img}`} alt="BlogImg" />
                                    </div>
                                    <Link to={ `/BlogOne/${Blog._id}`}>
                  <h3>{Blog.title}</h3>
                  </Link>
                                    <div className="End-Txt ">
                                      <button      onClick={() => {
                          dispatch(deleteBlog(Blog._id)).then(() => {
                            dispatch(AllBlog());
                          ;
                          });
                        }}>حذف</button>
                                <button onClick={() => navigate(`/admin/editblog/${Blog._id}`)}>تعديل</button>
                                      
                                    </div>
                        </div>
                       ))}
       
               
                    </div>
                </div>
                <div className="pagination">
            <button className={page === 1 ? "disabledButton" : "enabledButton"} onClick={prevPage} disabled={page === 1}>الصفحة السابقة</button>
            <button className={blogs && blogs.data.length < limit? "disabledButton" : "enabledButton"} onClick={nextPage} disabled={blogs && blogs.data.length < limit}>الصفحة التالية</button>
            </div>
                <form onSubmit={(event) => { event.preventDefault(); submitForm(); }}>
                    <div className="Content">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            type="text"
                            placeholder="اسم المنتج"
                        />
                        <input
                            value={desc}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            type="text"
                            placeholder="وصف المنتج"
                        />
                        <input
                            onChange={(e) => setimg(e.target.files[0])}
                            required
                            type="file"
                            placeholder="الصورة"
                            className="drop-container"
                            aria-label="File browser"
                        />
                    </div>
                    <div className="Sender">
                        <button type="submit">ارسل البيانات</button>
                    </div>
                </form>
            </div>
            :<Login/>}
        </>
    )
}

export default Admin