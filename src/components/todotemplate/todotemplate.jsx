import React from 'react';
import './todotemplate.scss';
const TodoTemplate = ({ children }) => {
  return (
    <div className="todotemplate">
      <div className="app_title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
