import styled from "styled-components";

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
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;

export default function ExpenseList({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <Section>
        <p>지출 내역이 없습니다.</p>
      </Section>
    );
  }
  return (
    <Section>
      <ListWrapper>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id}>
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
    </Section>
  );
}
