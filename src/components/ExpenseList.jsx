import { Section } from "../pages/Home";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ExpenseItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }

  span {
    font-size: 16px;
    color: #333;
  }

  span:last-child {
    font-weight: bold;
    color: #ffc062;
  }
`;

const ExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    &:first-child {
      margin-bottom: 4px;
      color: #666;
      font-size: 14px;
    }
    &:last-child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
`;

export default function ExpenseList({ expenses }) {
  const navigate = useNavigate();

  return (
    <Section>
      <ExpenseItemList>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            onClick={() => navigate(`/detail/${expense.id}`)}
          >
            <ExpenseDetails>
              <span>{expense.date}</span>
              <span>{`${expense.item} - ${expense.description}`}</span>
            </ExpenseDetails>
            <span>{expense.amount.toLocaleString()} 원</span>
          </ExpenseItem>
        ))}
      </ExpenseItemList>
    </Section>
  );
}
