import React from "react";
import DarkModeToggler from "./DarkModeToggler";
import GoBackLink from "./GoBackLink";
import NavBar from "./NavBar";

export type LayoutProps = {
  children: React.ReactNode;
  hasNavBar?: boolean;
  goBackTo?: string;
  className?: string;
}

export default function Layout(props: LayoutProps) {
  const { children, goBackTo='', hasNavBar=false, className='' } = props;

  // Navbar, toggler, goback are all not relative position
  return (
    <main className={`min-h-screen h-screen w-full px-8 pt-16 pb-8 ${className}`}> 
      <DarkModeToggler />
      { goBackTo ? <GoBackLink href={ goBackTo } /> : null }
      { hasNavBar ? <NavBar/> : null }
      { children }
    </main>
  )
}