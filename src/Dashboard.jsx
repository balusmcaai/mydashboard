import { useState, useEffect } from "react";

function TodoWidget() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow w-full">
      <h2 className="text-xl font-bold mb-2">📝 To-Do List</h2>
      <div className="flex gap-2 mb-3">
        <input
          className="border p-2 rounded w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            className={\`cursor-pointer mb-1 \${task.done ? "line-through text-gray-500" : ""}\`}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuoteWidget() {
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Success is not in what you have, but who you are.",
    "Don’t let yesterday take up too much of today.",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="p-4 bg-white rounded-2xl shadow w-full">
      <h2 className="text-xl font-bold mb-2">💡 Quote of the Day</h2>
      <p className="italic">“{randomQuote}”</p>
    </div>
  );
}

function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow w-full">
      <h2 className="text-xl font-bold mb-2">⏰ Clock</h2>
      <p className="text-2xl font-mono">{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <TodoWidget />
      <QuoteWidget />
      <ClockWidget />
    </div>
  );
}