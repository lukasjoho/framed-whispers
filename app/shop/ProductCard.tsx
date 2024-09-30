"use client";
import { Heart } from "lucide-react";
import React from "react";
import { Product } from "./types";
import { analytics } from "@/lib/analytics";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  position: number;
}

const ProductCard = ({ product, position }: ProductCardProps) => {
  const { id, name, image, price, category, isDiscounted } = product;
  return (
    <div>
      <div
        onClick={() =>
          analytics.track("Product Clicked", {
            id,
            name,
            price,
            category,
            isDiscounted,
            position,
          })
        }
        className="rounded-xl aspect-[4/5] bg-muted grid place-items-center p-6 overflow-hidden"
      >
        <div className="aspect-square w-full relative">
          <img
            src={image}
            alt=""
            className="max-w-full max-h-full p-4 border-4 border-primary shadow-frame absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <h2 className="font-medium text-lg">{product.name}</h2>
        <Heart
          onClick={() => analytics.track("Product Liked")}
          className="w-5 h-5"
        />
      </div>
    </div>
  );
};

export default ProductCard;
