import React from "react";
import styles from "./Login.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import LoginSignupErrorMessage from "@/components/messagecom/LoginSignupErrorMessage";
import { POST} from "@/repository/AxiosRepositpry";
import { setToken } from "@/redux/features/users/UserSlice";
import Cookies from "js-cookie";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    username: Yup.string().required("شماره موبایل خود را وارد نمایید"),
    password: Yup.string().required("رمز عبور را وارد نمایید"),
  });

  const formFields = {
    username: "",
    password: "",
  };

  const submitHandler = (values) => {
    // console.log(values);
    POST("/users/register" , values)
    .then (response=>{
      // console.log(response.data)
      if (response.data.id !== 0 )
      {
        POST("/users/login" , values)
        .then((response)=>{
          // dispatch( setToken( response.data.token))
          Cookies.set("token", response.data.token, {
            expires: 7,
            path: "/admin",
          });
          router.push("/welcome")
        });
      }
    });
  };

  return (
    <div className={`${styles.outerContainer}`}>
      <Formik
        onSubmit={submitHandler}
        initialValues={formFields}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <div className={`${styles.fieldsContainer}`}>
            <Image src="/images/logo.svg" width={150} height={150} />
            <Field
              className={`${styles.field}`}
              type="text"
              name="username"
              placeholder="شماره موبایل"
            />
            <ErrorMessage name="username" component={LoginSignupErrorMessage} />
            <Field
              className={`${styles.field}`}
              type="password"
              name="password"
              placeholder="رمز عبور"
            />
            <ErrorMessage name="password" component={LoginSignupErrorMessage} />
            <button
              type="submit"
              className={`${styles.loginButton}  ${styles.filed}`}
            >
              ثبت نام
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
