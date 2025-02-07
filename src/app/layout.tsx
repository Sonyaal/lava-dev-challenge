import React from 'react';
import localFont from 'next/font/local'

const myFont = localFont({
  src: "../../public/fonts/UncutSans-Variable.ttf",
  display: 'swap',
})

export const metadata = {
  title: 'Tally',
  description: 'Tally is an inventory management system.',
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

