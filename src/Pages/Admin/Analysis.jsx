import  { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import  { IpDel,getvisitorsIp} from "../../Store/AnalysisSlice"
import  { AllBlog } from "../../Store/BlogsSlice"
import  { AllServices } from "../../Store/ServicesSlice"
import  { AllEmail } from "../../Store/EmailSlice"


const Analysis = ()=> {
  const {  visitorips,page, limit,totalDocumentsIp} = useSelector((state) => state.AnalysisSlice); // Corrected state access
  const  {totalDocumentsBlog}  = useSelector((state) => state.Blogs);
    const { Emails } = useSelector((state) => state.Emails);
    const  {Services}  = useSelector((state) => state.Services);


    const dispatch = useDispatch();




useEffect(() => {
  document.body.dir = "rtl"
  dispatch(AllBlog());
  dispatch(getvisitorsIp());
  dispatch(AllServices());
  dispatch(AllEmail());
  dispatch(IpDel());
 
}, [dispatch]);



const nextPage = () => {
  if (visitorips && visitorips?.length === limit) {
    dispatch(getvisitorsIp(page + 1));
  }
};

const prevPage = () => {
  if (page > 1) {
    dispatch(getvisitorsIp(page - 1));
  }
};
    return(
        <>
        <div className="Analysis">
            <div className="Cards">
                <div className="Card-One">
                    <h4>{totalDocumentsBlog}</h4>
                    <h3>المدونات</h3>
                </div>
                <div className="Card-One">
                    <h4>{Services?.length}</h4>
                    <h3>الباقات</h3>
                </div>
                <div className="Card-One">
                    <h4>{Emails?.length}</h4>
                    <h3>الايملاات</h3>
                </div>
                <div className="Card-One">
                    <h4>{totalDocumentsIp}</h4>
                    <h3>الزيارات</h3>
                </div>
            </div>

            <div className="Email-Content">
            <table>
              <thead>
                <tr>
                  <th>ip</th>
                  <th>الدوله</th>
                  <th>حذف</th>
                </tr>
              </thead>
              {visitorips?.map((visit) => (
                <tbody key={visit._id}>
                  <tr>
                    
                    <td data-label="ip">{visit.ip}</td>
                    <td data-label="الدوله">{visit.country}</td>
                  
                    <td data-label="حذف">
                      <button  className="EmailDelete"  onClick={() => {
                          dispatch(IpDel(visit._id)).then(() => {
                            dispatch(getvisitorsIp());
                          ;
                          });
                        }}>x</button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="pagination">
            <button  className={page === 1 ? "disabledButton" : "enabledButton"} onClick={prevPage}  disabled={page === 1}>الصفحة السابقة</button>
            <button className={visitorips && visitorips?.length < limit ? "disabledButton" : "enabledButton"} onClick={nextPage} disabled={visitorips && visitorips?.length < limit}>الصفحة التالية</button>
            </div>
          </div>
        </div>
        </>
    )
}

export default Analysis
