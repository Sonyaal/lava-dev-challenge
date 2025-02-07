import React from 'react';
import Sidebar from './components/Sidebar';

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../../public/fonts/UncutSans-Variable.ttf",
  display: 'swap',
})
 

export const metadata = {
  title: 'Tally',
  description: 'Description of your app',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={myFont.className}>
      <body style={{ margin: 0}}>
            {children}
      </body>
    </html>
  );
};

export default Layout;

