import React, { useState } from "react";

interface LoginProps {
  onLogin: (username: string, papssword: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(username, password);
  };

  const navigate = (url: string) => {
    window.location.href = url;
  };

  const auth = async () => {
    const response = await fetch("http://localhost:5001/api/auth/google", {
      method: "post",
    });

    const data = await response.json();
    console.log(data);
    navigate(data.url);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
        Hello there, Welcome!!
      </h2>
      <div className="mb-6">
        <input
          type="text"
          value={username}
          id="username"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="mt-2 w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="mt-2 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        <button
          type="submit"
          className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Log In
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <a href="/register" className="text-indigo-700 hover:text-indigo-400">
            Sign Up
          </a>
        </p>
        <br />
        <p className="mt-4 text-center text-sm text-gray-600">
          Or Login with
          <button
            type="button"
            onClick={() => auth()}
            className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Google
          </button>
        </p>
      </div>
    </form>
  );
};

export default Login;
