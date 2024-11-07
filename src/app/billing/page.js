"use client";

import React, { useEffect, useState } from "react";

export default function BillingHistory() {
  const [billings, setBillings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchBillings = async () => {
      try {
        const response = await fetch(
          "https://capstone-dashboard-be.vercel.app/api/billings"
        );
        if (!response.ok) throw new Error("Failed to fetch billing history");
        const data = await response.json();
        setBillings(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load billing history.");
      } finally {
        setLoading(false);
      }
    };

    fetchBillings();
  }, []);

  // Filtered billings by selected date range
  const filteredBillings = billings.filter((billing) => {
    const masukDate = new Date(billing.waktuMasuk);
    const filterStartDate = startDate ? new Date(startDate) : null;
    const filterEndDate = endDate ? new Date(endDate) : null;

    return (
      (!filterStartDate || masukDate >= filterStartDate) &&
      (!filterEndDate || masukDate <= filterEndDate)
    );
  });

  // Group filtered billings by user name
  const groupedBillings = filteredBillings.reduce((acc, billing) => {
    const userName = billing.user_id.name;
    if (!acc[userName]) {
      acc[userName] = [];
    }
    acc[userName].push(billing);
    return acc;
  }, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-black">Billing History</h1>

      {/* Date Filter */}
      <div className="flex space-x-4 mb-6">
        <div>
          <label className="block text-gray-900">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className=" text-gray-600 border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-900">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="text-gray-600 border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">User</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Waktu Masuk</th>
              <th className="py-3 px-6 text-left">Halte Keluar</th>
              <th className="py-3 px-6 text-left">Waktu Keluar</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {Object.entries(groupedBillings).map(([userName, userBillings]) => (
              <React.Fragment key={userName}>
                <tr className="bg-gray-200 text-gray-700">
                  <td className="py-2 px-6 font-bold" colSpan="5">
                    {userName}
                  </td>
                </tr>
                {userBillings.map((billing) => (
                  <tr
                    key={billing._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-6">{billing.user_id.name}</td>
                    <td className="py-3 px-6">{billing.status}</td>
                    <td className="py-3 px-6">
                      {new Date(billing.waktuMasuk).toLocaleString()}
                    </td>
                    <td className="py-3 px-6">
                      {billing.halteKeluar || "N/A"}
                    </td>
                    <td className="py-3 px-6">
                      {billing.waktuKeluar
                        ? new Date(billing.waktuKeluar).toLocaleString()
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
