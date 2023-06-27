import styled from '@emotion/styled';

export const ItemLi = styled.li`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  &:nth-of-type(2n) {
    background-color: #edc3ca;
  }
`;

export const ItemSpan = styled.span``;

export const Button = styled.button`
  padding: 4px;
  border: 1px solid #120d14;
  border-radius: 8px;
  background-color: #120d14;
  font-size: 12px;
  color: #edc3ca;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
