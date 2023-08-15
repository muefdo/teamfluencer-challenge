"use client";

import React, { useEffect, useState } from "react";
import { Users } from "@/assets";
import { useRouter } from "next/navigation";

const List = () => {
  const router = useRouter();
  const [filteredUsers, setFilteredUsers] = useState(Users);
  const [isVerified, setIsVerified] = useState("");
  const [isVerifiedOpen, setIsVerifiedOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleReset = () => {
    setFilteredUsers(Users);
    setIsDropdownOpen(false);
    setIsVerifiedOpen(false);
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    const newFilteredUsers = Users.filter((user) => user.name === name);
    setFilteredUsers(newFilteredUsers);
  };

  const handleVerifiedChange = (event) => {
    setIsVerified(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  useEffect(() => {
    // Filter users based on category
    const filterUsers = () => {

      let filtered = Users;

      if (selectedFilter) {
        filtered = filtered.filter((user) => user.gender === selectedFilter);
      }

      if (isVerified === "Not Verified") {
        filtered = filtered.filter((user) => user.tiktok.verified === false);
      } else if (isVerified === "Verified") {
        filtered = filtered.filter((user) => user.tiktok.verified === true);
      }

      setFilteredUsers(filtered);
    };

    filterUsers();
  }, [selectedFilter, isVerified]);

  // Toggle functions
  const toggleVerified = () => {
    handleReset();
    setIsVerifiedOpen(!isVerifiedOpen);
  };

  const toggleDropdown = () => {
    handleReset();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between pb-4">
        {/* Category Part */}
        <div className="relative">
          <button
            id="dropdownRadioButton"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={toggleDropdown}
          >
            Select Gender
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <button
            id="dropdownRadioButton"
            className="ml-5 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={toggleVerified}
          >
            Select Is Verified
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <button
            className="ml-5 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={handleReset}
          >
            Reset Filters
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div
              id="dropdownRadio"
              className="z-10 w-36 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute"
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value="Male"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleFilterChange}
                    />
                    <label
                      htmlFor="filter-radio-example-1"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Male
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-5"
                      type="radio"
                      value="Female"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleFilterChange}
                    />
                    <label
                      htmlFor="filter-radio-example-5"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {isVerifiedOpen && (
            <div
              id="dropdownRadio"
              className="z-10 w-36 ml-44 pl-2 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute"
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value="Not Verified"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleVerifiedChange}
                    />
                    <label
                      htmlFor="filter-radio-example-1"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Not Verified
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-2"
                      type="radio"
                      value="Verified"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleVerifiedChange}
                    />
                    <label
                      htmlFor="filter-radio-example-2"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Verified
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Search Part */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Name"
            onChange={handleNameChange}
          />
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Name Surname
            </th>
            <th scope="col" className="px-6 py-3">
              Instagram Followers
            </th>
            <th scope="col" className="px-6 py-3">
              Tiktok Followers
            </th>
            <th
              scope="col"
              className="px-6 py-3 group  duration-300 ease-in-out"
            >
              <p className="group-hover:opacity-50">Average Likes</p>

              <span className="group-hover:flex hidden justify-center items-center group-hover:opacity-80">
                (Instagram)
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 group  duration-300 ease-in-out"
            >
              <p className="group-hover:opacity-50">Average Likes</p>

              <span className="group-hover:flex hidden justify-center items-center group-hover:opacity-80">
                (TikTok)
              </span>
            </th>

            <th scope="col" className="px-6 py-3duration-300 ease-in-out">
              <p className="">Verified</p>
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="h-[30vh]">
          {filteredUsers.map((user, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 h-[10vh]"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.name} {user.surname}
              </td>
              <td className="px-6 py-4">+{user.insta.followers}</td>{" "}
              <td className="px-6 py-4">+{user.tiktok.followers}</td>{" "}
              <td className="px-6 py-4">~{user.insta.average_like}</td>{" "}
              <td className="px-6 py-4">~{user.tiktok.tiktok_average_like}</td>{" "}
              <td className="px-6 py-4">
                {user.tiktok.verified ? (
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#2dea4d"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                      >
                        <g transform="scale(5.12,5.12)">
                          <path d="M41.9375,8.625c-0.66406,0.02344 -1.27344,0.375 -1.625,0.9375l-18.8125,28.78125l-12.1875,-10.53125c-0.52344,-0.54297 -1.30859,-0.74609 -2.03125,-0.51953c-0.71875,0.22266 -1.25391,0.83203 -1.37891,1.57422c-0.125,0.74609 0.17578,1.49609 0.78516,1.94531l13.9375,12.0625c0.4375,0.37109 1.01563,0.53516 1.58203,0.45313c0.57031,-0.08594 1.07422,-0.41016 1.38672,-0.89062l20.09375,-30.6875c0.42969,-0.62891 0.46484,-1.44141 0.09375,-2.10547c-0.37109,-0.66016 -1.08594,-1.05469 -1.84375,-1.01953z"></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                ) : (
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#ea2d2d"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                      >
                        <g transform="scale(10.66667,10.66667)">
                          <path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                )}
              </td>
              <td className="px-6 py-4">{user.age}</td>{" "}
              <td className="px-6 py-4">{user.gender}</td>{" "}
              <td className="px-6 py-4">
                <button
                  onClick={() => router.push(`/${user.insta.username}`)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
