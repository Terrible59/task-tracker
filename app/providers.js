'use client';
import { useState } from 'react';
import {SessionProvider} from "next-auth/react";
import RefreshTokenHandler from "../components/refreshTokenHandler";

export default function Providers({ children, session }) {
    const [interval, setInterval] = useState(0);
    return (
        <SessionProvider session={session}>
            {children}
            <RefreshTokenHandler setInterval={setInterval} />
        </SessionProvider>
    );
}
