import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  padding: 0;
`;

const Item = styled.li`
  font-size: 18px;
`;

const Button = styled.button`
  cursor: pointer;
  font-weight: 500;
  /* font-size: 12px; */
  line-height: calc(16 / 12);

  width: 152px;
  height: 44px;
  color: black;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  &:hover,
  &:focus {
    /* background-color: tomato; */
    border-color: tomato;
  }
  &:active {
    background-color: gainsboro;
  }
`;

const css = {
  List,
  Item,
  Button,
};

export default css;
