/* eslint-disable @next/next/no-head-element */
import '../styles/globals.scss';
import Providers from "./providers";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
          <title>Motivado</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
