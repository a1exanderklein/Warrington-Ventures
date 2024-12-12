import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="p-4">
        <nav className="space-x-4">
          <Link to="/" className="text-[#244174]">Home</Link>
          <Link to="/about" className="text-[#244174]">About</Link>
          <Link to="/team" className="text-[#244174]">Team</Link>
          <Link to="/portfolio" className="text-[#244174]">Portfolio</Link>
          <Link to="/contact" className="text-[#244174]">Contact</Link>
        </nav>
        <hr className="my-4" />
      </div>
      <div className="h-full"> 
        <Outlet />
      </div>
    </>
    // #244174 dark
    // #93ADDC light
    // #222222
  );
}
