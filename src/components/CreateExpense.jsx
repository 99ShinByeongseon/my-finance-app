import { useState } from "react";
import styled from "styled-components";
import { supabase } from "../utils/supabase";

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #ffc062;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

export default function CreateExpense({ month, addExpense }) {
  const [date, setDate] = useState(`2024-${String(month).padStart(2, "0")}-01`);
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = async () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }
    if (!item || !description) {
      alert("항목과 내용을 입력해주세요.");
      return;
    }
    const parsedAmount = parseInt(amount, 10);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("유효한 금액을 입력해주세요.");
      return;
    }
    const { data, error } = await supabase
      .from("expenses")
      .insert([
        {
          date,
          item,
          amount: parsedAmount,
          description,
        },
      ])
      .single();

    if (error) {
      console.error("Error inserting expense:", error);
      alert("데이터 저장 중 오류가 발생했습니다.");
    } else {
      addExpense(data);
      setDate(`2024-${String(month).padStart(2, "0")}-01`);
      setItem("");
      setAmount("");
      setDescription("");
    }
  };

  return (
    <Section>
      <FormWrapper>
        <Input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="날짜 (YYYY-MM-DD)"
        />
        <Input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="항목"
        />
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="금액"
        />
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="내용"
        />
        <Button onClick={handleSave}>저장</Button>
      </FormWrapper>
    </Section>
  );
}
