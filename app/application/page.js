'use client';
import React from "react";
import useAuth from "../../hooks/useAuth";
import MainTodoSection from "../../components/MainTodoSection";
import ProjectList from "../../components/ProjectList";

function Home() {
    const isAuth = useAuth(true);

    return <div>
        <ProjectList/>
        <MainTodoSection/>
    </div>
}

export default Home;