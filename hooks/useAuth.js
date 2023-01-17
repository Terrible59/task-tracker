import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function useAuth(shouldRedirect) {
    const { data: session } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            signOut({ callbackUrl: '/auth/login', redirect: shouldRedirect });
        }

        if (session === null) {
            if (pathname !== '/auth/login') {
                router.push('/auth/login');
            }
            setIsAuthenticated(false);
        } else if (session !== undefined) {
            if (pathname === '/auth/login') {
                router.push('/application');
            }
            setIsAuthenticated(true);
        }
    }, [session]);

    return isAuthenticated;
}