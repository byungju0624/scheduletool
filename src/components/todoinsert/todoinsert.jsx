import React, { useCallback, useState } from 'react';
import './todoinsert.scss';
import { MdAdd } from 'react-icons/md';
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault(); //submit 이벤트는 브라우저에 새로고침을 발생시키므로 방지하기 위해 이 함수를 사용한다.
    },
    [onInsert, value],
  );
  const onClick = useCallback(() => {
    onInsert(value);
    setValue('');
  }, [onInsert, value]);
  return (
    <form className="todoinsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요!"
        onChange={onChange}
        value={value}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
