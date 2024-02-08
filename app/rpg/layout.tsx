import React from 'react';


export default function RpgLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='p-6'>
      {children}
    </div>
  );
}
