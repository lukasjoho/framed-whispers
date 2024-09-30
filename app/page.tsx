import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grow grid place-items-center">
      <div className="border-8 border-primary p-6 w-[80%] h-[90%]">
        <div className="flex flex-col items-center justify-center gap-4 relative h-full">
          <img
            src="./images/beach.jpg"
            alt=""
            className="absolute left-0 top-0 w-full h-full object-cover -z-10"
          />
          <div className="gap-8 flex flex-col items-center">
            <h1 className="text-5xl font-extrabold text-primary-foreground tracking-tighter">
              Art on your wall
            </h1>
            <Link
              href="/shop"
              className={buttonVariants({ variant: "inverted" })}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
