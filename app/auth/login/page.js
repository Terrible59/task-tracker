'use client';
import React from "react";
import { signIn, signOut } from 'next-auth/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useAuth from "../../../hooks/useAuth";
import register from "../../../api/user/register";
function Login() {
    const { data: session, status } = useSession();
    const isAuthenticated = useAuth(true);
    const router = useRouter();
    return <section className="auth">
        <div className="auth-wrapper">
            <h1 className="auth__header">Войти</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={ async (values, { setSubmitting }) =>  {
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                    const result = await signIn('credentials', {redirect: false, ...values});
                    if (result.status === 200) {
                        router.push('/application');
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="auth-form">
                        <Field type="email" name="email" placeholder="Email" className="input" />
                        <ErrorMessage name="email" component="div" />
                        <Field type="password" name="password" placeholder="Пароль" className="input" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting} className="button">
                            Отправить
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
        <div className="auth-wrapper">
            <h1 className="auth__header">Регистрация</h1>
            <Formik
                initialValues={{ email: '', password: '', login: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={ async (values, { setSubmitting }) =>  {
                    console.log('submitting');
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                    const response = await register(values);
                    console.log(response);
                    const result = await signIn('credentials', {redirect: false, ...values});
                    if (result.status === 200) {
                        router.push('/application');
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="auth-form">
                        <Field type="email" name="email" placeholder="Email" className="input" />
                        <Field type="text" name="login" placeholder="Логин" className="input" />
                        <Field type="password" name="password" placeholder="Пароль" className="input" />
                        <button type="submit" disabled={isSubmitting} className="button">
                            Отправить
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    </section>
}

export default Login;