// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { supabase } from "./utils/supabase";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const { data, error } = await supabase.from("expenses").select("*");
      if (error) {
        console.error("Error fetching expenses:", error);
      } else {
        setExpenses(data);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home expenses={expenses} setExpenses={setExpenses} />} />
        <Route path="/expenses/:id" element={<Detail expenses={expenses} setExpenses={setExpenses} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
