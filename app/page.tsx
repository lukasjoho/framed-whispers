import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grow grid place-items-center">
      <div className="border-8 border-primary p-6 w-3/4 h-3/4">
        <div className="flex flex-col items-center justify-center gap-4 relative h-full">
          <img
            src="./images/walchensee.webp"
            alt=""
            className="absolute left-0 top-0 w-full h-full object-cover -z-10"
          />

          <h1 className="text-6xl font-extrabold text-primary-foreground tracking-tighter">
            Art on your wall
          </h1>
          <Button variant="inverted">Shop Now</Button>
        </div>
      </div>
    </div>
  );
}
