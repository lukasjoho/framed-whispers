import React from "react";
import { Icons } from "../shared/icons";

const Footer = () => {
  return (
    <footer className="mt-auto border-t py-12">
      <div className="container">
        <Icons.logo className="w-64" />
      </div>
    </footer>
  );
};

export default Footer;
