import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { notification } from "antd";

export default function Register() {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, title = "", desc = "") => {
    api[type]({
      message: title,
      description: desc,
    });
  };

  const [tailor, setTailor] = useState({
    name: "",
    price: "",
    orders: "",
    category: "",
    employees: "",
    suitsDesigned: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const temp = { ...tailor };
    temp[e.target.id] = e.target.value;
    setTailor(temp);
  };

  const handleRegister = () => {
    fetch("http://localhost:5000/api/tailor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tailor),
    })
      .then((response) => response.json())
      .then((data) => {
        openNotificationWithIcon(
          "success",
          "Success",
          "Succeful Registered Your Shop"
        );
      })
      .catch((error) => {
        openNotificationWithIcon("error", "Error", error.message);
      });
  };

  return (
    <div>
      {contextHolder}
      <Navbar />
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-lg shadow-md dark:bg-gray-800 my-10">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Register Your Shop
        </h1>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-white dark:text-gray-200" htmlFor="name">
              Name
            </label>
            <input
              value={tailor.name}
              onChange={(e) => handleInputChange(e)}
              id="name"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-white dark:text-gray-200" htmlFor="Price">
              Price
            </label>
            <input
              value={tailor.price}
              onChange={(e) => handleInputChange(e)}
              id="price"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="orders">
                No. of orders Placed
              </label>
              <input
                value={tailor.orders}
                onChange={(e) => handleInputChange(e)}
                id="orders"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="category"
              >
                Category
              </label>
              <input
                value={tailor.category}
                onChange={(e) => handleInputChange(e)}
                id="category"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="employees"
              >
                Smart employees
              </label>
              <input
                value={tailor.employees}
                onChange={(e) => handleInputChange(e)}
                id="employees"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="suitsDesigned"
              >
                Suits Designed
              </label>
              <input
                value={tailor.suitsDesigned}
                onChange={(e) => handleInputChange(e)}
                id="suitsDesigned"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            value={tailor.description}
            onChange={(e) => handleInputChange(e)}
            id="description"
            type="textarea"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleRegister}
            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
          >
            Register
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
