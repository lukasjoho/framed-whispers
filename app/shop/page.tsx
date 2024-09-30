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
import { products } from "./productsData";
import Link from "next/link";
import { analytics } from "@/lib/analytics";

export const metadata = {
  title: "Shop",
  description: "Shop all prints.",
};

const ShopPage = () => {
  return (
    <>
      <div className="bg-muted grid place-items-center w-full border-b text-muted-foreground p-3 text-sm">
        All prints starting at $45 · Free delivery
      </div>
      <div className="space-y-8 py-8">
        <div className="container flex items-center justify-between">
          <h1 className="text-4xl font-semibold">All Prints.</h1>
          {/* <Button variant="outline">
          Filters
          <ListFilter className="w-4 h-4" />
        </Button> */}
          <div className="flex gap-4">
            <Select>
              <div>
                <span className="font-medium text-sm">Category</span>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All" />
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
                  <SelectValue placeholder="All" />
                </SelectTrigger>
              </div>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 container">
          {products.map((product, index) => {
            return (
              <Link href={`/shop/${product.id}`}>
                <ProductCard
                  key={product.id}
                  product={product}
                  position={index}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
