import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <section className="flex min-h-screen items-center justify-center p-8 bg-background">
      <div className="flex flex-col items-center text-center max-w-md w-full">
        <div className="w-20 h-20 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
          <ShieldAlert className="h-10 w-10 text-destructive" />
        </div>

        <h1 className="text-3xl font-semibold tracking-tight">Access denied</h1>

        <p className="text-muted-foreground mt-3 text-base leading-relaxed">
          You don&apos;t have permission to access this workspace. Please
          contact your administrator or switch to an authorized account.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="gap-2 shadow-sm">
            <Link href="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <Button asChild variant="ghost" size="lg" className="gap-2">
            <Link href="/login">
              <ArrowLeft className="w-4 h-4" />
              Go to Login
            </Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Need help?{" "}
          <Link
            href="#"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Contact support
          </Link>
        </p>
      </div>
    </section>
  );
}
