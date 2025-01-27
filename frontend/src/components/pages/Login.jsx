import React, { useState } from "react";
import { loginUser } from "../apiCalls";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await loginUser(formData);

      if (response.success) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("role", response.role);
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        setError(response.message || "Invalid credentials.");
      }
    } catch (err) {
      setError("Error during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-extrabold mb-6 text-center text-orange-700">
          Welcome Back!
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {["email", "password"].map((field) => (
            <div className="relative" key={field}>
              <input
                type={field}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-orange-500"
                required
              />
            </div>
          ))}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-6 text-center">
          Don’t have an account?{" "}
          <a href="/register" className="text-orange-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
