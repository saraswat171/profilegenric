import MiniDrawer from "@/component/NewNavbar/NewNavbar";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body >  
         
      <MiniDrawer>
          {children}
          
      </MiniDrawer>
     
        </body>
      </html>
    );
  }
  