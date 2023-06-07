import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
   GlobalStyle,
   Form,
   Title,
   FirstMsg,
   FormInput,
   CustomCheck,
   Btn,
   BoldTxt,
   BottomText,
   Email,
   TermsAndCoLink,
   Name,
   ErrorMsg,
   Password,
} from "../../components/styles/Auth.styled";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { RESET, register } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { BsFillPersonFill} from "react-icons/bs";

const Signup = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { isLoading, isLoggedIn, isSuccess } = useSelector(
      (state) => state.auth
   );

   const formik = useFormik({
      initialValues: {
         name: "",
         email: "",
         password: "",
         password2: "",
         agreedToTerms: false,
      },
      validationSchema: Yup.object({
         name: Yup.string().required("Name is required"),
         email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
         password: Yup.string()
            .required("Password is required")
            .matches(
               /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
               "Password must meet the requirements"
            ),
         password2: Yup.string()
            .required("Confirm password is required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
      }),
      onSubmit: async (values) => {
         if (values.agreedToTerms === false) {
            return toast.error("Please accept terms and conditions");
         }

         const userData = {
            name: values.name,
            email: values.email,
            password: values.password,
         };

         await dispatch(register(userData));
      },
   });

   useEffect(() => {
      if (isSuccess && isLoggedIn) {
         navigate("/");
      }

      dispatch(RESET());
   }, [isLoggedIn, isSuccess, dispatch, navigate]);

   return (
      <>
         <GlobalStyle />
         <Form onSubmit={formik.handleSubmit}>
            <Title>Sign Up</Title>
            <FirstMsg className="signup">
               This is the future of Education. Start for free.
            </FirstMsg>

            <Name>
               <i>
                  <BsFillPersonFill size={18} />
               </i>
               <FormInput
                  type="text"
                  className={
                     formik.touched.name && formik.errors.name ? "error" : ""
                  }
                  placeholder="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               {formik.touched.name && formik.errors.name && (
                  <ErrorMsg>{formik.errors.name}</ErrorMsg>
               )}
            </Name>

            <Email>
               <i>
                  <MdEmail size={18} />
               </i>
               <FormInput
                  type="email"
                  className={formik.errors.email ? "error" : ""}
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               {formik.touched.email && formik.errors.email && (
                  <ErrorMsg>{formik.errors.email}</ErrorMsg>
               )}
            </Email>

            <Password>
               <PasswordInput
                  className={formik.errors.password ? "error" : ""}
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               {formik.touched.password && formik.errors.password && (
                  <ErrorMsg>{formik.errors.password}</ErrorMsg>
               )}
            </Password>

            <Password>
               <PasswordInput
                  className={formik.errors.password2 ? "error" : ""}
                  placeholder="Confirm password"
                  name="password2"
                  value={formik.values.password2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onPaste={(e) => {
                     e.preventDefault();
                     toast.error("Cannot paste password");
                     return false;
                  }}
               />
               {formik.touched.password2 && formik.errors.password2 && (
                  <ErrorMsg>{formik.errors.password2}</ErrorMsg>
               )}
            </Password>

            <TermsAndCoLink>
               <CustomCheck
                  type="checkbox"
                  id="customCheck1"
                  name="agreedToTerms"
                  value={formik.values.agreedToTerms}
                  onChange={formik.handleChange}
               />
               &nbsp;
               <BoldTxt>
                  <label className="boldTxt">
                     I agree to the{" "}
                     <Link to="/singup/termsandconditions">
                        terms & conditions
                     </Link>
                  </label>
               </BoldTxt>
            </TermsAndCoLink>

            <Btn disabled={formik.isSubmitting} type="submit">
               Sign Up
            </Btn>

            <BottomText>
               <BoldTxt>
                  Already have an account? <Link to="/login"> Log in</Link>
               </BoldTxt>
            </BottomText>
         </Form>
      </>
   );
};

export default Signup;
