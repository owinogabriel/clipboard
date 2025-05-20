import { useEffect } from "react";
import Header from "./elements/Header";
import Footer from "./elements/Footer";


interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title
  }, [title])


  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  )
}