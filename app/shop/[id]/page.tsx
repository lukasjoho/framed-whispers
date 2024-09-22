import { Button } from "@/components/ui/button";
import React from "react";

const ProductDetailPage = () => {
  return (
    <div>
      <div className="container grid grid-cols-12">
        <div className="col-span-8">
          <div className="aspect-[4/3]">
            <img src="/images/clouds.png" alt="" className="w-full" />
          </div>
        </div>
        <div className="col-span-4">
          <h1 className="text-3xl font-semibold">Aqua Blue</h1>
          <h2 className="font-medium">Size</h2>
          <Button variant="outline" className="w-full justify-start">
            Small 60cm x 40cm
          </Button>
          <Button className="w-full">Buy Now</Button>
          <Button className="w-full" variant="outline">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
