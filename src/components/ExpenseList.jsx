import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExpenseItem = styled.div`
  background-color: #ffc062;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export default function ExpenseList({ expenses }) {
  const navigate = useNavigate();

  return (
    <Section>
      {expenses.length === 0 ? (
        <p>지출 내역이 없습니다.</p>
      ) : (
        <ListWrapper>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              onClick={() => navigate(`/expenses/${expense.id}`)}
            >
              <div>
                <div>{expense.date}</div>
                <div>
                  {expense.item} - {expense.description}
                </div>
              </div>
              <div>{expense.amount} 원</div>
            </ExpenseItem>
          ))}
        </ListWrapper>
      )}
    </Section>
  );
}
