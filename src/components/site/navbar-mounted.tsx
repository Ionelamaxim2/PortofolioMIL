"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FileText } from "lucide-react";

export default function NavbarMounted() {
  const items = [
    { name: "Home", url: "/#home", icon: Home },
    { name: "About", url: "/#about", icon: User },
    { name: "Projects", url: "/#projects", icon: Briefcase },
    { name: "Resume", url: "/#resume", icon: FileText },
  ];
  return <NavBar items={items} />;
}
