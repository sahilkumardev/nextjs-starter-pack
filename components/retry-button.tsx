"use client";

import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

export function RetryButton({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const [spinning, setSpinning] = React.useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    setSpinning(true);
    setTimeout(() => window.location.reload(), 250);
  };

  return (
    <Button
      type="button"
      variant="ghost"
      className={cn(
        "gap-2 w-full sm:w-auto text-muted-foreground hover:text-foreground",
        className,
      )}
      aria-label="Reload page"
      onClick={handleClick}
      {...props}
    >
      <RefreshCw className={cn("w-4 h-4", spinning && "animate-spin")} />
      Try Again
    </Button>
  );
}
