import { Heart } from "lucide-react";
import React from "react";

function track(name: string, properties: {}) {
  console.log("clicked");
}

const ProductCard = () => {
  return (
    <div
      onClick={() =>
        track("Product Clicked", {
          id: "123",
          name: "Clouds",
        })
      }
    >
      <div className="rounded-xl aspect-[4/5] bg-muted grid place-items-center p-8">
        <div className="aspect-square w-full">
          <img src="/images/clouds.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between pt-3">
        <h2 className="font-medium">Clouds</h2>
        <Heart className="w-5 h-5" />
      </div>
    </div>
  );
};

export default ProductCard;
