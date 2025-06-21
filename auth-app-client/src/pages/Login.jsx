import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleLogin = async (formData) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("token", data.token); // save token
        navigate("/abcWebsite"); // redirect after login
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <AuthForm
      type="login"
      onSubmit={handleLogin}
      linkText="Don't have an account? Sign up here"
      linkHref="/signup"
      error={error}
      setError={setError}
    />
  );
};

export default Login;
