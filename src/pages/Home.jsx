import { useState, useEffect } from "react";
import styled from "styled-components";
import { supabase } from "../utils/supabase";
import { getMonth } from "../utils/getMonth";
import MonthNavigation from "../components/MonthNavigation";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";

const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export default function Home() {
  const [month, setMonth] = useState(1);
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

  const filteredExpenses = expenses.filter(
    (expense) => expense && expense.date && getMonth(expense.date) === month
  );

  const addExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  return (
    <Container>
      <MonthNavigation month={month} setMonth={setMonth} />
      <CreateExpense month={month} addExpense={addExpense} />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
}
