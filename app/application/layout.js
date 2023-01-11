/* eslint-disable @next/next/no-head-element */
import '../../styles/globals.scss';
import AppBar from "../../components/AppBar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
    return (
        <div className="content-wrapper">
            <AppBar/>
            <div className="content">
                {children}
            </div>
        </div>
    );
}
