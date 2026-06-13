import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-ink">
          Error 404
        </span>
        <h1 className="mt-3 font-serif text-7xl font-semibold tracking-tight text-foreground">
          404
        </h1>
        <p className="mt-4 font-mono text-sm text-info">
          Deze pagina bestaat niet (meer).
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-mono text-sm text-background transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Terug naar home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
