import { nanoid } from "nanoid";
import { Product } from "./types";

export const products: Product[] = [
  {
    id: nanoid(),
    name: "Montmartre",
    image: "/images/paris.webp",
    price: 20,
    category: "nature",
    isDiscounted: false,
  },
  {
    id: nanoid(),
    name: "Cloud",
    image: "/images/clouds.png",
    price: 45.0,
    category: "nature",
    isDiscounted: false,
  },
  {
    id: nanoid(),
    name: "BCN",
    image: "/images/bcn.jpg",
    price: 20,
    category: "nature",
    isDiscounted: false,
  },
  {
    id: nanoid(),
    name: "Reflected Majesty",
    image: "/images/night.webp",
    price: 20,
    category: "nature",
    isDiscounted: false,
  },

  {
    id: nanoid(),
    name: "Alps",
    image: "/images/alps.png",
    price: 20,
    category: "nature",
    isDiscounted: false,
  },

  {
    id: nanoid(),
    name: "Snowy",
    image: "/images/snowy.png",
    price: 20,
    category: "nature",
    isDiscounted: false,
  },

  {
    id: nanoid(),
    name: "Walchen Lake",
    image: "/images/walchensee.webp",
    price: 20,
    category: "nature",
    isDiscounted: false,
  },

  {
    id: nanoid(),
    name: "Cloudrider",
    image: "/images/cloudrider.jpg",
    price: 45.0,
    category: "nature",
    isDiscounted: false,
  },
];
