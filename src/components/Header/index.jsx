import { Link, useNavigate } from "react-router-dom";
import { FaVirusCovid } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";
import Form from "./Form";
const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    navigate(`detail?q=${text}`);
  };

  return (
    <header className="flex bg-zinc-900 text-white p-5 md:px-20 justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <FaVirusCovid className="text-green-500 text-xl" />
        <h1> covid takip </h1>
      </Link>
      <Form handleSubmit={handleSubmit} />
      <div className="flex items-center gap-3 max-md:hidden">
        <p className="flex flex-col text-sm items-center">
          <span>bugün aşı olanlar</span>
          <span className="text-gray-400">(45,876)</span>
        </p>
        <TbVaccine className="text-2xl text-orange-400" />
      </div>
    </header>
  );
};

export default Header;
