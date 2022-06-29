import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  display: flex;
  appearance: none;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.2rem solid #F60074;
  border-radius: 50%;
  background: transparent;
  transition: background 0.1s ease-in-out;
  outline: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0.5rem #F60074;
  }

  &:before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: #F60074;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
    position: absolute;
  }

  &:checked {
    &:before {
      opacity: 1;
    }
  }
`

export const Label = styled.label`
  padding-left: 0.8rem;
  line-height: 1;
`