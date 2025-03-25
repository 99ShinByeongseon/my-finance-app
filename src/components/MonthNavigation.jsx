import styled from "styled-components";

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

const MonthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const MonthButton = styled.button`
  background-color: ${(props) => (props.selected ? "#ffc062" : "#f0f0f0")};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
`;

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function MonthNavigation({ month, setMonth }) {
  return (
    <Section>
      <MonthWrapper>
        {MONTHS.map((m) => (
          <MonthButton
            key={m}
            selected={m === month}
            onClick={() => setMonth(m)}
          >
            {m}월
          </MonthButton>
        ))}
      </MonthWrapper>
    </Section>
  );
}
