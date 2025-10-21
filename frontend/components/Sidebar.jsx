export default function Sidebar() {
  const buttons = [
    "Modify Rx", "Reprint Rx", "Cancel Rx",
    "Modify Specific Rx #", "Reprint Specific Rx #", "Counsel Rx"
  ];

  return (
    <div className="bg-gray-50 border-r border-gray-200 w-56 p-4 flex flex-col gap-2">
      {buttons.map((text) => (
        <button
          key={text}
          className="bg-white border border-blue-200 text-blue-900 font-semibold text-sm rounded-md py-2 hover:bg-blue-200 transition"
        >
          {text}
        </button>
      ))}
    </div>
  );
}
