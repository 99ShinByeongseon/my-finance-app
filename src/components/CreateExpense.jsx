import styled from "styled-components";

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
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

export default function CreateExpense({ month }) {
  return (
    <Section>
      <FormWrapper>
        <Input placeholder="날짜 (YYYY-MM-DD)" />
        <Input placeholder="항목" />
        <Input placeholder="금액" type="number" />
        <Input placeholder="내용" />
        <Button>저장</Button>
      </FormWrapper>
    </Section>
  );
}
