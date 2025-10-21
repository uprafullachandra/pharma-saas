import { useEffect, useState } from "react";

export default function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/patients")
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Backend not reachable:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        💊 Pharma SaaS Dashboard
      </h1>

      {loading ? (
        <p className="text-gray-500">Loading patients...</p>
      ) : patients.length === 0 ? (
        <p className="text-gray-500">No patient records found.</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Age</th>
              <th className="py-3 px-4 text-left">Diagnosis</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{p.id}</td>
                <td className="py-2 px-4">{p.name}</td>
                <td className="py-2 px-4">{p.age}</td>
                <td className="py-2 px-4">{p.diagnosis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
