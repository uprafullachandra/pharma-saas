export default function DashboardCards() {
  return (
    <div className="flex-1 p-4 space-y-6">
      {/* Rx Work in Progress */}
      <div className="bg-white border border-blue-200 rounded-xl p-4 shadow">
        <h2 className="font-bold text-blue-700 mb-2">Rx Work in Progress</h2>
        <table className="w-full border-collapse text-sm">
          <thead className="bg-blue-50">
            <tr>
              <th>Overdue</th><th>0–1 hrs</th><th>1–4 hrs</th><th>4+ hrs</th>
              <th>Tomorrow</th><th>Trouble</th><th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colSpan="7" className="text-center text-gray-500 py-4">No data yet</td></tr>
          </tbody>
        </table>
      </div>

      {/* Pickup Card */}
      <div className="bg-white border border-blue-200 rounded-xl p-4 shadow">
        <h2 className="font-bold text-blue-700 mb-2">Rx’s Waiting for Pickup</h2>
        <table className="w-full border-collapse text-sm">
          <thead className="bg-blue-50">
            <tr>
              <th>1–7 days</th><th>7–14 days</th><th>14–21 days</th>
              <th>21–28 days</th><th>28+ days</th><th>Total $</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colSpan="6" className="text-center text-gray-500 py-4">No data yet</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
