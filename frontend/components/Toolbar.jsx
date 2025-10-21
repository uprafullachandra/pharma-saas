export default function Toolbar() {
  const buttons = [
    "Dashboard", "Callbacks", "Followups", "Notes",
    "Inbound Docs", "Outbound Fax", "Mail", "Calendar"
  ];

  return (
    <div className="bg-black rounded-lg m-3 p-3 flex flex-wrap gap-6 justify-center shadow">
      {buttons.map((text) => (
        <button
          key={text}
          className="bg-black text-white font-bold w-28 h-14 rounded-xl hover:bg-blue-500 transition"
        >
          {text}
        </button>
      ))}
    </div>
  );
}
