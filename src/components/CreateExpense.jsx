import { Section } from "../pages/Home";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const InputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-end;
  margin-bottom: 16px;
`;

const InputGroupInline = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 120px;

  label {
    margin-bottom: 4px;
    font-size: 14px;
    color: #555;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.2s ease;
    &:focus {
      outline: none;
      border-color: #ffc062;
    }
  }
`;

const AddButton = styled.button`
  padding: 10px 24px;
  height: 40px;
  background-color: #ffc062;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #ffc062;
  }
`;

export default function CreateExpense({ month, expenses, setExpenses }) {
  const [newDate, setNewDate] = useState(
    `2024-${String(month).padStart(2, "0")}-01`
  );
  const [newItem, setNewItem] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddExpense = () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(newDate)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }
    const parsedAmount = parseInt(newAmount, 10);
    if (!newItem || parsedAmount <= 0) {
      alert("유효한 항목과 금액을 입력해주세요.");
      return;
    }
    const newExpense = {
      id: uuidv4(),
      month: parseInt(newDate.split("-")[1], 10),
      date: newDate,
      item: newItem,
      amount: parsedAmount,
      description: newDescription,
    };

    setExpenses([...expenses, newExpense]);
    setNewDate(`2024-${String(month).padStart(2, "0")}-01`);
    setNewItem("");
    setNewAmount("");
    setNewDescription("");
  };

  return (
    <Section>
      <InputRow>
        <InputGroupInline>
          <label htmlFor="date">날짜</label>
          <input
            type="text"
            id="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            placeholder="YYYY-MM-DD"
          />
        </InputGroupInline>
        <InputGroupInline>
          <label htmlFor="item">항목</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="지출 항목"
          />
        </InputGroupInline>
        <InputGroupInline>
          <label htmlFor="amount">금액</label>
          <input
            type="number"
            id="amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            placeholder="지출 금액"
          />
        </InputGroupInline>
        <InputGroupInline>
          <label htmlFor="description">내용</label>
          <input
            type="text"
            id="description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="지출 내용"
          />
        </InputGroupInline>
        <AddButton onClick={handleAddExpense}>저장</AddButton>
      </InputRow>
    </Section>
  );
}
