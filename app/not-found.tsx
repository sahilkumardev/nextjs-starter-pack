import { RetryButton } from "@/components/retry-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen items-center justify-center p-5">
      <div className="w-full max-w-md text-center">
        <h1 className="text-9xl font-extrabold tracking-tight text-primary">
          404
        </h1>
        <p className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Page not found
        </p>
        <p className="mt-4 text-base text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
          <RetryButton />
        </div>
      </div>
    </section>
  );
}
