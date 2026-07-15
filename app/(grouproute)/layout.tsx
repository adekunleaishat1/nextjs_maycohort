import Footer from "../sharedui/footer";
import Navbar from "../sharedui/footer/navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body className="">
        <Navbar/>
        {children}
        <Footer/>
      </body>
  );
}