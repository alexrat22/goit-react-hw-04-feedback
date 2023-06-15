import styled from '@emotion/styled';

export const Buttons = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-left: 0;
  margin-top: 35px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 12px 20px;
  font-weight: 600;
  text-transform: capitalize;
  background-color: teal;
  color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 6px rgba(46, 47, 66, 0.08),
    5px 3px 3px rgba(46, 47, 66, 0.16), 0 2px 1px rgba(46, 47, 66, 0.08);

  :hover {
    background-color: tomato;
  }
`;
