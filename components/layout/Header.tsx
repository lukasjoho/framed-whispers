import React from "react";
import { Icons } from "../shared/icons";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container flex items-center relative h-[60px] ">
        <ul>
          <li className="font-medium">
            <Link href="/shop">Shop prints</Link>
          </li>
        </ul>
        <Icons.logo className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%]" />
        <div className="ml-auto">
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
