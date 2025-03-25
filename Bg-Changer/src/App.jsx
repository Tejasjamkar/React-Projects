import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded"
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setcolor("red");
              }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded"
              style={{ backgroundColor: "yellow" }}
              onClick={() => {
                setcolor("yellow");
              }}
            >
              yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded "
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => {
                setcolor("black");
              }}
            >
              black
            </button>
            <button
              className="outline-none px-4 py-1 rounded"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                setcolor("green");
              }}
            >
              green
            </button>
            <button
              className="outline-none px-4 py-1 rounded"
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                setcolor("blue");
              }}
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
