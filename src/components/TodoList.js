import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  over-flow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text='운동하기' done={true} />
      <TodoItem text='숙제하기' done={true} />
      <TodoItem text='밥 먹기' done={false} />
      <TodoItem text='신문 읽기' done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
