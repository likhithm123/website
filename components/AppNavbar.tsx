"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import BoltNavbar from "@/components/BoltNavbar";
import TechNextNavbar from "@/components/TechNextNavbar";

export default function AppNavbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/hackathon")) {
    return <BoltNavbar />;
  }

  if (pathname.startsWith("/technext")) {
    return <TechNextNavbar />;
  }

  return <Navbar />;
}
