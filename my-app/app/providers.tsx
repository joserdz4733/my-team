"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
