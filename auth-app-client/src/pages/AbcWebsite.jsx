import { useNavigate } from "react-router-dom";

const AbcWebsite = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // remove token
    navigate("/login"); // redirect to login
  };

  return (
    <div className="p-10 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to your website!
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default AbcWebsite;
