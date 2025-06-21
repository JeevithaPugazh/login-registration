import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      const { password, confirmPassword } = formData;
      if (password !== confirmPassword) {
        setError("Confirm Password is mismatch");
        return;
      }

      const response = await fetch(
        "http://localhost:3000/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // optional
        navigate("/login"); // or go to dashboard directly
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <AuthForm
      type="signup"
      onSubmit={handleSignup}
      linkText="Already have an account? Login here"
      linkHref="/login"
      error={error}
      setError = {setError}
    />
  );
};

export default Signup;
