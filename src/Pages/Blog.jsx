import { useDispatch, useSelector } from "react-redux";
import { AllBlog } from "../Store/BlogsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LoadApi from "../comp/LoadApi"
import ErrorApi from "../comp/ErrorAPi"
import { useTranslation } from 'react-i18next';



const Blog = () => {

  const { blogs, loading, error, page, limit } = useSelector((state) => state.Blogs);
 
  const dispatch = useDispatch();
  useEffect(() => {
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
  
  const { t } = useTranslation();

  return (
    <>
    <div className="Six-Section PaddingFullApp Blog-Margin ">
        <div className="Head-Txt">
        <h4>{t("المدونه")}</h4>
       <h1>{t("اخر المقالات والاحداث")}</h1>
     
        </div>
        {error?<ErrorApi />:loading?<LoadApi/>:<div className="Cards Blogs-1">
          
          {blogs?.data.map((Blog) => (
            <div className="Card Blog-1" key={Blog._id}>
              <div className="Box-Img" >
                <img src={`${process.env.REACT_APP_API_URL}/${Blog.img}`} alt="" />
              </div>
              <Link to={ `/BlogOne/${Blog._id}`}>
                <h3>{Blog.title}</h3>
                </Link>
              <div className="End-Txt">
                <Link to={ `/BlogOne/${Blog._id}`}>
                  <span></span>
                  <p>اقرا اكثر</p>
                </Link>
              </div>
              </div>
           
          ))}



      </div>}
            <div className="pagination">
            <button className={page === 1 ? "disabledButton" : "enabledButton"} onClick={prevPage} disabled={page === 1}>الصفحة السابقة</button>
<button className={blogs && blogs.data.length < limit ? "disabledButton" : "enabledButton"} onClick={nextPage} disabled={blogs && blogs.data.length < limit}>الصفحة التالية</button>

            </div>
      </div>

    </>
  )
}

export default Blog