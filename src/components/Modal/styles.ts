import styled from "styled-components/native";

export const Container = styled.Modal`
`;

export const ModalContent = styled.View`
  flex: 1;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  background-color: rgba(000, 000, 000, 0.25);
`;

export const ModalBox = styled.View`
  padding: 40px 24px 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray_1};

  justify-content: center;
  align-items: center;
`;
