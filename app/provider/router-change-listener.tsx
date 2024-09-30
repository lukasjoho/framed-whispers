// src/app/route-change-listener.tsx

"use client";

import { analytics } from "@/lib/analytics";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function RouteChangeListener() {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
    analytics.page();
    setChanges((prev) => prev + 1);
  }, [pathname]);

  return <></>;
}
