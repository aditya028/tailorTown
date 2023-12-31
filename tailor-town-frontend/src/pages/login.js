import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import axios from "axios";

export default function Login() {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, title = "", desc = "") => {
    api[type]({
      message: title,
      description: desc,
    });
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .get("http://localhost:5000/api/login", {
        params: { email: email, password: password },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status == 400) {
          openNotificationWithIcon(
            "error",
            "Error",
            "Email and Password do not match"
          );
        } else {
          console.log(response);
          navigate("/");
        }
        return response.data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        openNotificationWithIcon("error", "Error", error.message);
      });
  };

  return (
    <React.Fragment>
      {contextHolder}

      <Navbar />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[80vh] lg:py-0 bg-gray-50 dark:bg-gray-900">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#DC2626] hover:bg-[#B91C1C] font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              New user{" "}
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
