import styled from 'styled-components';

export const Form = styled.form.attrs({
  autoComplete: 'off',
})`
  background-color: #f2f2f2;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  margin-bottom: 1rem;
`;

export const Text = styled.h1``;

export const Notification = styled.div.attrs((props) => ({
  close: props.close,
  hidden: 'hidden',
  visible: 'visible',
}))`
  background-color: #5bc6ac;

  padding: 1rem;
  margin-bottom: 1rem;
  color: #fff;
  letter-spacing: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  visibility: ${(props) => (props.close ? props.visible : props.hidden)};
`;

export const Success = styled.div`
  font-size: 2rem;
`;

export const Close = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroups = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const FormGroup = styled.div`
  float: left;
  margin-right: 1rem;
  width: 48%;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.6rem;
  margin-bottom: 0.2rem;
`;

export const Input = styled.input.attrs((props) => ({
  /* required: 'required', */
  last: props.type,
  underline: '0.2rem solid #a5699b',
  none: 'none',
}))`
  width: 100%;
  height: 3rem;
  font-size: 1.6rem;
  border: none;
  background-color: transparent;
  border-bottom: ${(props) => (!(props.last === 'file') ? props.underline : props.none)};

  &:focus {
    outline: none;
  }
`;

export const InputRadioGroup = styled.div`
  margin-bottom: 0.5rem;
`;

export const LabelRadio = styled.label`
  font-size: 1.5rem;
  position: relative;
  padding-left: 2.5rem;
`;

export const RadioButton = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.5rem solid #a5699b;

  position: absolute;
  left: 0;

  &::after {
    content: '';
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background-color: #a5699b;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    opacity: 0;
  }
`;

export const InputRadio = styled.input.attrs({
  type: 'radio',
})`
  display: none;

  &:checked ~ ${LabelRadio} ${RadioButton}::after {
    opacity: 1;
  }
`;

export const InputSelectGroup = styled.div`
  height: 3.1rem;
  width: 100%;
`;

export const Select = styled.select`
  height: 100%;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const ButtonField = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;

  margin-top: 2rem;
`;

export const Button = styled.button`
  color: white;
  font-family: 'Lato';
  font-size: 1.8rem;
  font-weight: 700;

  background-color: #693f62;
  border: none;
  width: 15rem;
  padding: 1rem;

  cursor: pointer;

  transition: all 0.5s;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0.1rem);
    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.3);
  }
`;
