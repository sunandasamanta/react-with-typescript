import { useState } from "react";

export default function App() {

  const [count, setCount] = useState({
    yes: 0,
    no: 0
  });

  return (
    <div className="App text-center w-screen">
      <h1 className="font-bold text-2xl my-6">Is TypeScript better than JavaScript?</h1>
      <p className="my-2">
        <span className="font-bold text-green-600 text-2xl">{count.yes}</span> people voted 'Yes' and <span className="font-bold text-red-600 text-2xl">{count.no}</span> people voted 'No'.
        </p>
      <div className="my-6">
        <button
          onClick={() => { setCount({ ...count, no: count.no + 1 }) }}
          className="mr-10 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          No
        </button>
        <button
          onClick={() => { setCount({ ...count, yes: count.yes + 1 }) }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Yes, Definitely.
        </button>
      </div>
    </div>
  )
}

