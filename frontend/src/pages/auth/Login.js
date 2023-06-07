import react, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";

import {
   GlobalStyle,
   Form,
   Title,
   FirstMsg,
   FormInput,
   RemMeAndForgetPass,
   CustomCheck,
   Btn,
   HorizontalLine,
   BottomText,
   BoldTxt,
   ErrorMsg,
   Email,
   Password,
} from "../../components/styles/Auth.styled";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import {useDispatch, useSelector} from 'react-redux'
import { RESET, login } from "../../redux/features/auth/authSlice";

const initialState = {
   email: "",
   password: "",
   rememberMe: false
};

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [formData, setFormData] = useState(initialState);
   const { email, password, rememberMe } = formData;

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const {isLoading, isLoggedIn, isSuccess} =   useSelector((state) => state.auth);

   const loginUser = async (e) => {
      e.preventDefault();

      if(!email || !password){
          return toast.error("All fields are required");   
      }

      const userData = {
         email,
         password,
       }

      await dispatch(login(userData));
   };

   useEffect(()=>{
      if(isSuccess && isLoggedIn)
      {
         navigate("/");
      }

      dispatch(RESET());
   }, [isLoggedIn,isSuccess,dispatch, navigate])



   return (
      <>
         <GlobalStyle />
         <Form onSubmit={loginUser}>
            <Title>Login</Title>
            <FirstMsg>Welcome back</FirstMsg>

            {/* <ErrorMsg>error</ErrorMsg> */}

            <Email>
               <i className="email">
                  <MdEmail  size={18} />
               </i>
               <FormInput
                  type="email"
                  className="login"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={handleInputChange}
               />
            </Email>

            <Password>
            <PasswordInput
               className="login"
               placeholder="Password"
               name="password"
               value={password}
               onChange={handleInputChange}
            />
            </Password>

            <RemMeAndForgetPass>
               <div>
                  <CustomCheck type="checkbox" id="customCheck1" value={rememberMe} onChange={handleInputChange}></CustomCheck> &nbsp;
                  <BoldTxt>
                     <label htmlFor="customCheck1">Remember me</label>
                  </BoldTxt>
               </div>

               <BoldTxt>
                  <Link to="/login/forgetpassword">Forgot password?</Link>
               </BoldTxt>
            </RemMeAndForgetPass>

            <Btn>Log in</Btn>

            <HorizontalLine />

            <Btn className="google">Login with Google</Btn>

            <BottomText>
               <BoldTxt>
                  Not registered yet?{" "}
                  <Link to="/signup">Create an account</Link>
               </BoldTxt>
            </BottomText>
         </Form>
      </>
   );
};

export default Login;
