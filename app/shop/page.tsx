import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShopPage = () => {
  return (
    <div>
      <div className="container flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Prints</h1>
        {/* <Button variant="outline">
          Filters
          <ListFilter className="w-4 h-4" />
        </Button> */}
        <Select>
          <div>
            <span className="font-medium text-sm">Category</span>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
          </div>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <div>
            <span className="font-medium text-sm">Orientation</span>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
          </div>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 gap-8 container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ShopPage;
