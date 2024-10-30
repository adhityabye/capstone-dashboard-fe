"use client";

import { useEffect, useState } from "react";

export default function BillingHistory() {
  const [billings, setBillings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-black">Billing History</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">User</th>
              <th className="py-3 px-6 text-left">Halte Masuk</th>
              <th className="py-3 px-6 text-left">Waktu Masuk</th>
              <th className="py-3 px-6 text-left">Halte Keluar</th>
              <th className="py-3 px-6 text-left">Waktu Keluar</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {billings.map((billing) => (
              <tr
                key={billing._id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6">{billing.user_id.name}</td>
                <td className="py-3 px-6">{billing.halteMasuk}</td>
                <td className="py-3 px-6">
                  {new Date(billing.waktuMasuk).toLocaleString()}
                </td>
                <td className="py-3 px-6">{billing.halteKeluar || "N/A"}</td>
                <td className="py-3 px-6">
                  {billing.waktuKeluar
                    ? new Date(billing.waktuKeluar).toLocaleString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
