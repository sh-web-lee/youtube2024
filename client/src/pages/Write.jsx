import React, { useState } from 'react';
import styled from "styled-components"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const InputWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid #b9e7e7;
  padding: 8px 12px;
  transition: all .3s;

  &:focus-within {
    border-color: teal;
    box-shadow: inset(0px 2px 5px teal);
  }
  input {
    width: 100%;
  }
`

const EditContainer = styled.div`
  margin-top: 20px;
`

const Content = styled.div`
  flex: 5;
`
const Menu = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

`

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value)
  return (
    <div className="mt-[20px] flex gap-[20px]">
      <Content>
        <InputWrapper>
          <input type="text" placeholder="title" />
        </InputWrapper>
        <EditContainer>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </EditContainer>
      </Content>
      <Menu>
        <div>1</div>
        <div>2</div>
      </Menu>
    </div>
  )
} 
export default Write