import { Link, useLocation } from "react-router-dom";

const NavItem = ({ path, name }: { path: string; name: string }) => {
  const location = useLocation();
  console.log(location);
  return (
    <Link to={path}>
      <p className="relative inline-block uppercase text-textColor transition duration-300 group">
        <span
          className={`relative z-[60] group-hover:text-primary ${
            location.pathname === path && "text-secondary"
          }`}
        >
          {name}
        </span>
        <span
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full ${
            location.pathname === path && "w-full bg-secondary"
          }`}
        ></span>
      </p>
    </Link>
  );
};

export default NavItem;
