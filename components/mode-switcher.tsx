"use client";

import {
  useCallback,
  useEffect,
  useSyncExternalStore,
  type HTMLAttributes,
} from "react";
import { useTheme } from "next-themes";
import { META_THEME_COLORS } from "./wrapper-theme-provider";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};

export function ModeSwitcher({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { setTheme, resolvedTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const isDark = resolvedTheme === "dark";
  const renderIsDark = mounted ? isDark : false;

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    meta.setAttribute(
      "content",
      isDark ? META_THEME_COLORS.dark : META_THEME_COLORS.light,
    );
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={toggleTheme}
      onKeyDown={(e) => e.key === "Enter" && toggleTheme()}
      className={cn(
        "flex items-center gap-3 w-full px-3 py-2.5 rounded-md cursor-pointer select-none",
        "bg-secondary hover:bg-secondary/80 transition-colors",
        className,
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4.5"
        aria-hidden="true"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 3l0 18" />
        <path d="M12 9l4.65 -4.65" />
        <path d="M12 14.3l7.37 -7.37" />
        <path d="M12 19.6l8.85 -8.85" />
      </svg>

      <span className="flex-1 text-sm font-medium text-foreground">
        Dark mode
      </span>

      <div
        aria-checked={renderIsDark}
        role="switch"
        className={cn(
          "relative w-9 h-5 rounded-full transition-colors duration-200 shrink-0 flex items-center",
          renderIsDark ? "bg-primary" : "bg-muted-foreground/40",
        )}
      >
        <span
          className={cn(
            "absolute size-4 rounded-full bg-white transition-all duration-200",
            renderIsDark ? "right-0.5" : "left-0.5",
          )}
        />
      </div>
    </div>
  );
}
