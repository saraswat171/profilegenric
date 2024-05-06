

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >  
        <div>
         ======================
        </div>
        {children}
        <div>
          =======================
        </div>
      </body>
    </html>
  );
}
