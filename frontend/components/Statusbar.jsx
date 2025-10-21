import { useEffect, useState } from "react";

export default function Statusbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleString());
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-t-lg shadow-inner">
      User: TP (Telus Pharmacist)
      {time && ` | ${time}`}
    </div>
  );
}
