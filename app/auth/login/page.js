'use client';
import React from "react";
import { signIn, signOut } from 'next-auth/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function Login() {
    const { data: session, status } = useSession();
    const router = useRouter();
    return <section className="login">
        <h1 className="login__header">Войти</h1>
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
                    router.replace('/');
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
    </section>
}

export default Login;