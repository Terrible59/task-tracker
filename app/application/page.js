'use client';
import React from "react";
import useAuth from "../../hooks/useAuth";
import TodoList from "../../components/TodoList";
import ProjectList from "../../components/ProjectList";

function Home() {
    const isAuth = useAuth(true);
    return <div>
        <ProjectList/>
        <TodoList/>
    </div>
}

export default Home;