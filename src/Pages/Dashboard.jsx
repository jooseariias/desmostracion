import NavBarUsers from "@/Components/Navbars/NavBarUsers";
import { useState } from "react";
import { IoPersonCircle, IoLogOut, IoLanguage } from "react-icons/io5";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [currentPage, setCurrentPage] = useState(1);


  const users = [
    {
      id: 1,
      name: "John",
      lastName: "Doe",
      email: "john@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Alice",
      lastName: "Johnson",
      email: "alice@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Bob",
      lastName: "Brown",
      email: "bob@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Charlie",
      lastName: "Williams",
      email: "charlie@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 6,
      name: "David",
      lastName: "Davis",
      email: "david@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 7,
      name: "Eve",
      lastName: "Lee",
      email: "eve@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 8,
      name: "Frank",
      lastName: "Smith",
      email: "frank@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 9,
      name: "George",
      lastName: "Johnson",
      email: "george@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 10,
      name: "Hannah",
      lastName: "Brown",
      email: "hannah@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 11,
      name: "Ivan",
      lastName: "Williams",
      email: "ivan@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 12,
      name: "John",
      lastName: "Davis",
      email: "john@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 13,
      name: "Joseph",
      lastName: "Lee",
      email: "joseph@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 14,
      name: "Kevin",
      lastName: "Smith",
      email: "kevin@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 15,
      name: "Michael",
      lastName: "Johnson",
      email: "michael@example.com",
      photo: "https://via.placeholder.com/50",
    },
    {
      id: 16,
      name: "Nicholas",
      lastName: "Brown",
      email: "nicholas@example.com",
      photo: "https://via.placeholder.com/50",
    },
  ];

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleDateRangeChange = (e) =>
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  const handlePageChange = (page) => setCurrentPage(page);


  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / 10);
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return (
    <div>
      <NavBarUsers />
      <div className="container mx-auto p-4">
        <nav className="bg-white shadow-md fixed top-0 z-50 w-full py-4">
          <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
            <a
              href="/"
              className="flex items-center text-xl font-bold text-gray-800 hover:text-blue-600 transition"
            >
              <span className="ml-2">E-Numbers</span>
            </a>
            <div className="flex items-center gap-6">
              <button
                onClick={() => {
        
                  
                }}
                className="flex items-center text-gray-700 hover:text-blue-600 transition"
              >
                <IoLanguage size={20} />
                <span className="ml-2 font-semibold">En</span>
              </button>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-gray-700">
                  <IoPersonCircle size={20} />
                  <span className="ml-2 font-semibold">Admin</span>
                </div>
                <button
                  onClick={() => console.log("Logout")}
                  className="flex items-center text-gray-700 hover:text-red-600 transition"
                >
                  <IoLogOut size={20} />
                  <span className="ml-2 font-semibold">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border p-2 rounded-md mb-2 md:mb-0 md:mr-2"
            />
            <input
              type="date"
              name="start"
              value={dateRange.start}
              onChange={handleDateRangeChange}
              className="border p-2 rounded-md mb-2 md:mb-0 md:mr-2"
            />
            <input
              type="date"
              name="end"
              value={dateRange.end}
              onChange={handleDateRangeChange}
              className="border p-2 rounded-md mb-2 md:mb-0"
            />
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Photo</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Last Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">ID</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="border p-2">
                      <img
                        src={user.photo}
                        alt={`${user.name} ${user.lastName}`}
                        className="w-12 h-12 rounded-full"
                      />
                    </td>
                    <td className="border p-2">{user.name}</td>
                    <td className="border p-2">{user.lastName}</td>
                    <td className="border p-2">{user.email}</td>
                    <td className="border p-2">{user.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-l-md bg-gray-200 hover:bg-gray-300"
            >
              Prev
            </button>
            <span className="px-4 py-2 border-t border-b">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-r-md bg-gray-200 hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
