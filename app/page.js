'use client';
import React from "react";
import useAuth from "../hooks/useAuth";

function Home() {
    const isAuth = useAuth(true);
    return <div>I am home</div>
}

export default Home;