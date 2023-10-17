'use client'

import { useRouter } from "next/navigation";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    const router = useRouter();
    
  return <button onClick={() => router.push("/")}>
    GO HOME
  </button>
};

export default Navbar;
