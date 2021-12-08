import { useState, Fragment } from 'react';
import { Form, Header, Text, FormField, ButtonField, Button } from '../../styled-components/FormProfile-styled';

import GeneralInput from './GeneralInput';
import SelectInput from './SelectInput';

const FormProfile = (props) => {
  const [userData, setUserData] = useState({});

  const changeHandler = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const avatarChangeHandler = (event) => {
    if (event.target.files.length > 0) {
      let src = URL.createObjectURL(event.target.files[0]);
      setUserData({
        ...userData,
        [event.target.name]: src,
      });
    }
  };

  const submitHandler = (event) => {
    // Prevent from form submission to server
    event.preventDefault();
    // Gather all data from input
    props.onSubmitData(userData);
  };

  return (
    <Fragment>
      <Form onSubmit={submitHandler}>
        <Header>
          <Text>Form Data Diri</Text>
        </Header>
        <FormField>
          <GeneralInput onChange={changeHandler} onUpload={avatarChangeHandler} />
          <SelectInput onChange={changeHandler} />
        </FormField>
        <ButtonField>
          <Button>Preview Data</Button>
        </ButtonField>
      </Form>
    </Fragment>
  );
};

export default FormProfile;
