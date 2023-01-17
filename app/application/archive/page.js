'use client';
import React from "react";
import useAuth from "../../../hooks/useAuth";
import ArchiveTodoList from "../../../components/ArchiveTodoList";

function Archive() {
    const isAuth = useAuth(true);
    return <div>
        <ArchiveTodoList/>
    </div>
}

export default Archive;