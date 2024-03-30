import { useDispatch, useSelector } from "react-redux";
import { oneBlog } from "../Store/BlogsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const BlogOne =()=> {
    const { BlogOne } = useSelector((state) => state.Blogs);
    const { id } = useParams();
    const dispatch = useDispatch();
useEffect(() => {
    dispatch(oneBlog(id));
}, [dispatch, id]);

    


    return (
        <>
        <div className="Blog-One" key={BlogOne._id} >
            <div className="First-Section">
                <h3>{BlogOne.title}</h3>
            </div>
            <div className="Secound-Section">
                <div className="Content-top">
                    <img src={`${process.env.REACT_APP_API_URL}/${BlogOne.img}`} alt="" />
                    <h3>{BlogOne.title}</h3>
                    <p>{BlogOne.desc}</p>
                </div>
            </div>
        </div>
       
        </>
  
)}

export default BlogOne