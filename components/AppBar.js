'use client';
import React from "react";
import Link from "next/link";
import { signOut } from 'next-auth/react';
export default function AppBar() {
    return (
        <div className="app-bar">
            <div className="app-bar__item">
                <Link className="app-bar__link" href="/">Home</Link>
            </div>
            <div className="app-bar__item">
                <Link className="app-bar__link" href="/"></Link>
            </div>
            <div className="app-bar__item">
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        </div>
    );
}