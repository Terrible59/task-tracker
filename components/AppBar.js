'use client';
import React from "react";
import Link from "next/link";
import { signOut } from 'next-auth/react';
import { usePathname } from "next/navigation";
import { MdInbox, MdFace } from "react-icons/md";

export default function AppBar() {
    const pathname = usePathname();
    return (
        <div className="app-bar">
            <div className={"app-bar__item" + (pathname === '/application' ? ' app-bar__item_active' : '')}>
                <Link className="app-bar__link" href="/application"><MdInbox/> Задачи</Link>
            </div>
            <div className="app-bar__item">
                <Link className="app-bar__link" href="/"><MdFace/> Дети</Link>
            </div>
            <div className="app-bar__item">
                <button onClick={() => signOut()} className="btn btn-danger">Выйти</button>
            </div>
        </div>
    );
}