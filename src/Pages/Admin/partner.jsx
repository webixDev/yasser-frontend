import React, { useState } from "react";
import { AllServices,AddService ,deleteService} from "../../Store/ServicesSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Partner = () => {
    const [mainTitle, setmainTitle] = useState("");
    const [titleOne, settitleOne] = useState("");
    const [titleTwo, settitleTwo] = useState("");
    const [titleThree, settitleThree] = useState("");
    const [titleFour, settitleFour] = useState("");
    const [price, setprice] = useState("");

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const  {Services}  = useSelector((state) => state.Services);
    const userToken = useSelector((state) => state.LoginSlice.userToken);


    useEffect(() => {
        dispatch(AllServices());
      }, [dispatch]);


      const submitForm = (event) => {
        event.preventDefault();
        const formData = {
            mainTitle,
            titleOne,
            titleTwo,
            titleThree,
            titleFour,
            price
        };
    
        dispatch(AddService(formData))
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
                    dispatch(AllServices());
                    alert("Data has been sent successfully.");

                }
            })
            .catch((error) => {
                alert("An error occurred while sending data: " + (error.message || "Unknown error"));
            });
    };
    
    const handleDelete = (id) => {
        dispatch(deleteService(id)).then(() => {
            dispatch(AllServices());
        });
    };
    return (
        <>
            {userToken? <div className="Body-Admin">
                <div className="Admin-Section">
                    <div className="Head-Txt">
                        <h4>الباقات</h4>
                    </div>
                    <div className="Services">
                    <div className="Cards">
                <div className="Two-Card">
                     {Services?.map((service)=> (
                       <div key={service._id} className="Box-one" data-aos="flip-right" data-aos-duration="1000">
                            <h1 >{service.mainTitle}</h1>
                            <ul>
                             <li>{service.titleOne}</li>

                             <li>{service.titleTwo}</li>

                             <li>{service.titleThree}</li>

                             <li>{service.titleFour}</li>
                              <li>{service.price}</li>
                         </ul>
                        
                         <div className="End-Txt">
                                <button  onClick={() => handleDelete(service._id)}>حذف</button>
                                <button onClick={() => navigate(`/admin/editservice/${service._id}`)}>تعديل</button>
                            </div>
                           
                         </div>
                     ))}
                 </div>
                </div>
                </div>
                    {/* <div className="Cards">
                        <div className="Card">
                            <div className="Box-Img">
                                <img src="http://localhost:3000/static/media/Six-Section1.b7d556565060d08743b3.jpg" alt="" />
                            </div>
                            <a href="/">
                                <h3>كيفية حفظ القرآن في وقت قصير</h3>
                            </a>
                            <div className="End-Txt">
                                <button className="">حذف</button>
                                <button className="">تعديل</button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <form onSubmit={submitForm}>
                    <div className="Content">
                        <input
                            value={mainTitle}
                            onChange={(e) => setmainTitle(e.target.value)}
                            required
                            type="text"
                            placeholder="اسم الباقه"
                        />
                        <input
                            value={titleOne}
                            onChange={(e) => settitleOne(e.target.value)}
                            required
                            type="text"
                            placeholder="الخدمه الاولي"
                        />
                        <input
                            value={titleTwo}
                            onChange={(e) => settitleTwo(e.target.value)}
                            required
                            type="text"
                            placeholder="الخدمه الثانيه"
                        />
                        <input
                            value={titleThree}
                            onChange={(e) => settitleThree(e.target.value)}
                            required
                            type="text"
                            placeholder="الخدمه الثالثه"
                        />
                        <input
                            value={titleFour}
                            onChange={(e) => settitleFour(e.target.value)}
                            required
                            type="text"
                            placeholder="الخدمه الرابعه"
                        />
                        <input
                            value={price}
                            onChange={(e) => setprice(e.target.value)}
                            required
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

export default Partner;
