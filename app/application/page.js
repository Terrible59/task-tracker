'use client';
import React from "react";
import useAuth from "../../hooks/useAuth";
import TodoList from "../../components/TodoList";

function Home() {
    const isAuth = useAuth(true);
    return <div>
        <TodoList/>
    </div>
}

export default Home;