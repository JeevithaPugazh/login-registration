import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({
  type,
  onSubmit,
  linkText,
  linkHref,
  error,
  setError
}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-96"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        {type === "signup" ? "Sign Up" : "Login"}
      </h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        pattern="[a-zA-Z0-9]{4,20}"
        className="w-full p-2 border mb-3 rounded"
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        minLength={4}
        maxLength={20}
        placeholder="Password"
        className="w-full p-2 border mb-3 rounded"
        onChange={handleChange}
        required
      />

      {type === "signup" && (
        <input
          type="password"
          name="confirmPassword"
          minLength={4}
          maxLength={20}
          placeholder="Confirm Password"
          className="w-full p-2 border mb-3 rounded"
          onChange={handleChange}
          required
        />
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {type === "signup" ? "Register" : "Login"}
      </button>

      {/* Link to switch between login/signup */}
      {linkText && linkHref && (
        <p className="text-sm text-center mt-4">
          <Link
            to={linkHref}
            className="text-blue-600 underline"
          >
            {linkText}
          </Link>
        </p>
      )}
      {error && (
        <p className="text-red-600 text-sm text-center mt-4">
          {" "}
          {error}{" "}
        </p>
      )}
    </form>
  );
};

export default AuthForm;
