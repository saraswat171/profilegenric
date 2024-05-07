import Layout from "@/Layout/Layout";
import './drawerss.css'


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body >  
          <div className="drawerss" >
         <Layout/>
          </div>
          {children}
          <div>    
          </div>
        </body>
      </html>
    );
  }
  