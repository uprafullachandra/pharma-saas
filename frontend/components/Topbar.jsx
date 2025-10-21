export default function Topbar() {
  const buttons = [
    "Patient (F3)", "Drug (F5)", "Doctor (F7)", "Workflow (F9)",
    "Pickup (F10)", "Drop-off (F11)", "New Rx (F12)", "Start"
  ];

  return (
    <div className="bg-black text-white rounded-lg m-3 p-2 flex flex-wrap gap-3 justify-center shadow">
      {buttons.map((text) => (
        <button
          key={text}
          className="bg-black hover:bg-blue-600 px-4 py-2 rounded-lg font-medium transition"
        >
          {text}
        </button>
      ))}
    </div>
  );
}
