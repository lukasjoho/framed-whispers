"use client";
import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import {
  Fullscreen,
  Heart,
  Icon,
  MapPin,
  PencilRuler,
  Pin,
  Truck,
  Undo,
  Video,
} from "lucide-react";
import React from "react";

const ProductDetailPage = () => {
  return (
    <div className="py-12">
      <div className="container max-w-[1400px] mb-4">
        <div className="text-muted-foreground">
          Shop <span className="text-primary">/ Aqua Blue</span>
        </div>
      </div>
      <div className="container max-w-[1400px] grid grid-cols-3 gap-24 relative">
        <div className="col-span-2 space-y-4">
          <div className="aspect-[4/3] bg-muted p-20 relative rounded-xl">
            <Heart className="absolute left-5 top-5 w-5 h-5" />
            <Button
              className="absolute right-4 top-4 h-8 px-3 shadow-md text-xs"
              variant="inverted"
            >
              <Video className="w-4 h-4" />
              Place in your room
            </Button>
            <div className="w-full h-full relative">
              <img
                src="/images/clouds.png"
                alt=""
                className="p-8 border-[12px] border-primary shadow-frame max-w-full max-h-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="flex gap-3 absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-2 h-2 bg-primary/30 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PromoItem
              icon={<PencilRuler className="w-7 h-7" />}
              title="High quality frames"
              description="Crafted and assembled in Germany."
            />
            <PromoItem
              icon={<Undo className="w-7 h-7" />}
              title="Free returns"
              description="Return or replace orders within 30 days."
            />
          </div>
        </div>
        <div className="col-span-1 space-y-8">
          <div>
            <h1 className="text-3xl font-semibold">Aqua Blue</h1>
            <div className="flex items-center text-sm mt-1">
              <h2 className="flex items-center gap-0.5 text-primary">
                <MapPin className="w-4 h-4" />
                Somewhere
                <span className="text-muted-foreground">by Lukas Joho</span>
              </h2>
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-2">Size</h2>
            <div className="space-y-2">
              <Option label="Small" info="40cm x 40cm" price={35} />
              <Option
                label="Medium"
                info="80cm x 80cm"
                price={50}
                selected={true}
              />
              <Option label="Large" info="120cm x 120cm" price={75} />
              <Option label="Giant" info="180cm x 180cm" price={75} />
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-2">Frame</h2>
            <div className="flex items-center gap-1.5">
              <CircularOption image="/images/frame-black.jpg" selected={true} />
              <CircularOption image="/images/frame-bright-wood.jpg" />
              <CircularOption image="/images/frame-dark-wood.jpg" />
              <CircularOption image="/images/frame-white.jpg" />
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-2">Border</h2>
            <div className="flex gap-1.5 w-full">
              <Button
                variant="outline"
                className="grow border-2 border-primary"
              >
                With
              </Button>
              <Button variant="outline" className="grow">
                Without
              </Button>
            </div>
          </div>
          <div>
            <div className="text-green-600 mb-3 flex items-center gap-2">
              <Truck className="w-4 h-4" />
              Delivered for free within 2 - 4 days.
            </div>
            <div className="space-y-2">
              <Button className="w-full">Buy Now</Button>
              <Button className="w-full" variant="outline">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

interface PromoItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PromoItem = ({ icon, title, description }: PromoItemProps) => {
  return (
    <div className="flex items-center gap-4 border rounded-md p-4 px-6 grow shrink-0 flex-1">
      {icon}
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

interface CircularOptionProps {
  image: string;
  selected?: boolean;
}

const CircularOption = ({ image, selected = false }: CircularOptionProps) => {
  return (
    <div
      className={cn(
        "border rounded-full w-12 h-12 overflow-hidden p-1",
        selected && "border-2 border-primary"
      )}
    >
      <div className="rounded-full overflow-hidden">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

interface OptionProps {
  label: string;
  info: string;
  price: number;
  selected?: boolean;
}

const Option = ({ label, info, price, selected = false }: OptionProps) => {
  return (
    <Button
      onClick={() => analytics.track("Option Selected")}
      variant="outline"
      className={cn(
        "w-full flex flex-row justify-between",
        selected && "border-2 border-primary"
      )}
    >
      <span className="font-medium">{label}</span>{" "}
      <span className="text-muted-foreground font-normal">{info}</span>
      <span>${price}</span>
    </Button>
  );
};
