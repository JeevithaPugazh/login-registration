import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AbcWebsite = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
  const fetchUser = async () => {
    const token = `Bearer ${sessionStorage.getItem("token")}`;
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (response.ok) {
        const data = await response.json();
         console.log("User data from API:", data); 
        setUser(data);
      } else {
        console.log("Session expired");
        navigate("/login");
      }
    } catch (err) {
      console.log("Error accessing the page", err);
      navigate("/login");
    }
  };

  fetchUser(); 
}, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // remove token
    navigate("/login"); // redirect to login
  };

  return (
    <div className="p-10 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">
          Welcome to your website{user ? `, ${user.username}` : ""}!
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
