import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AllEmail, deleteEmail } from "../../Store/EmailSlice";
import Login from "./Login";

const Email = () => {
  const { Emails } = useSelector((state) => state.Emails);
  const userToken = useSelector((state) => state.LoginSlice.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllEmail());
  }, [dispatch]);

  return (
    <>
      {userToken ? (
        <>
          <div className="Head-Txt-Email">
            <h4>البريد</h4>
          </div>
          <div className="Email-Content">
            <table>
              <thead>
                <tr>
                  <th>الاسم</th>
                  <th>العمر</th>
                  <th>البلد</th>
                  <th>الهاتف</th>
                  <th>سبب الالتحاق</th>
                  <th>حذف</th>
                </tr>
              </thead>
              {Emails?.map((Email) => (
                <tbody key={Email._id}>
                  <tr>
                    <td data-label="الاسم">{Email.name}</td>
                    <td data-label="العمر">{Email.age}</td>
                    <td data-label="البلد">{Email.country}</td>
                    <td data-label="الهاتف">{Email.phone}</td>
                    <td data-label="سبب الالتحاق">{Email.email}</td>
                    <td
                      
                      onClick={() => {
                        dispatch(deleteEmail(Email._id)).then(() => {
                          dispatch(AllEmail());
                        });
                      }}
                      data-label="حذف"
                    >
                      <button className="EmailDelete">حذف</button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Email;
