import React from "react";
import styles from "./Login.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import LoginSignupErrorMessage from "@/components/messagecom/LoginSignupErrorMessage";

const Login = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("شماره موبایل خود را وارد نمایید"),
    password: Yup.string().required("رمز عبور را وارد نمایید"),
  });

  const formFields = {
    username: "",
    password: "",
  };

  const submitHandler = (values) => {
    console.log(values);
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
          <Image  className={`${styles.Containerimg}`} src="/images/logo.svg" width={150} height={150} />
          <div className={`${styles.Container}`} >
          <span className={`${styles.Containera}`} >ورود | ثبت‌نام</span>
          <span  className={`${styles.Containerb}`} >سلام!</span>
          <span  className={`${styles.Containerc}`}  >لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>
          </div>
          <Field
            className={`${styles.field}`}
            type="text"
            name="username"
            placeholder="شماره موبایل"
          />
          <LoginSignupErrorMessage name="username" component={LoginSignupErrorMessage} />
          <Field
            className={`${styles.field1}`}
            type="password"
            name="password"
            placeholder="رمز عبور"
          />
          <ErrorMessage name="password" component={LoginSignupErrorMessage} />
          <button
            type="submit"
            className={`${styles.loginButton}  ${styles.filed}`}
          >
            ورود
          </button>
          <div className={`${styles.tozihat}`}>
            <span className={`${styles.tozihat1}`}>
            ورود شما به معنای پذیرش شرایط دیجی‌کالا و قوانین حریم‌خصوصی است
            </span>
          </div>
        </div>
      </Form>
          
      </Formik>
    </div>
  );
};

export default Login;
