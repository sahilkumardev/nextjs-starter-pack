import * as React from "react";

import { ThemeProviderWrapper } from "@/components/wrapper-theme-provider";
import { MaxWidthWrapper } from "@/components/wrapper-max-width";
import { TooltipProvider } from "@/components/ui/tooltip";

export function RootProviderWrapper({
  children,
}: React.ComponentProps<"main">) {
  return (
    <ThemeProviderWrapper>
      <TooltipProvider>
        <MaxWidthWrapper>
          {children}
          <div />
        </MaxWidthWrapper>
      </TooltipProvider>
    </ThemeProviderWrapper>
  );
}
