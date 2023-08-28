import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md">
          <button
            className="outline-none bg-red-500 text-white px-4 py-1 rounded-md shadow-lg"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none bg-green-500 text-white px-4 py-1 rounded-md shadow-lg"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none bg-blue-500 text-white px-4 py-1 rounded-md shadow-lg"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none bg-orange-500 text-white px-4 py-1 rounded-md shadow-lg"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none bg-purple-500 text-white px-4 py-1 rounded-md shadow-lg"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none bg-yellow-500 text-white px-4 py-1 rounded-md shadow-lg"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none bg-pink-500 text-white px-4 py-1 rounded-md shadow-lg"
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
