import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-secondary border-b border-border px-6 py-2">
      <div className="max-w-7xl mx-auto text-sm">

        <Link
          to="/"
          className="text-primary font-semibold hover:underline"
        >
          Home
        </Link>

        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");

          return (
            <span key={to}>
              {" > "}
              <Link
                to={to}
                className="text-muted-foreground hover:underline"
              >
                {value.replace("-", " ")}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;