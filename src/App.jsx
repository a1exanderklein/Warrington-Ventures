import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="p-4">
      <nav className="space-x-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
        <Link to="/team" className="text-blue-500">Team</Link>
        <Link to="/portfolio" className="text-blue-500">Portfolio</Link>
        <Link to="/contact" className="text-blue-500">Contact</Link>
      </nav>
      <hr className="my-4" />
      <Outlet />
    </div>
  );
}
