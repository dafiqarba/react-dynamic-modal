import { useState } from 'react';
import { Wrapper, ContentWrapper, Button, ResetModal } from './styled-components/App-styled';
import FormProfile from './components/FormProfile/FormProfile';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App() {
  const [userData, setUserData] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [key, setKey] = useState(0);

  // Gather data from Form component and set modalState to true
  const submitDataHandler = (userDataForm) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        {
          ...userDataForm,
          key: String(key),
        },
      ];
    });
    setKey(key + 1);
    setModalState(true);
  };

  const closeHandler = () => {
    setModalState(false);
  };
  const resetHandler = () => {
    setUserData('');
  };
  console.log(modalState);
  return (
    <Wrapper>
      <ContentWrapper>
        <FormProfile onSubmitData={submitDataHandler} />
        <Button>
          <ResetModal onClick={resetHandler}>Reset Modal</ResetModal>
        </Button>
        {modalState && <ModalWindow data={userData} modalState={modalState} onClose={closeHandler}/>}
      </ContentWrapper>
    </Wrapper>
  );
}

export default App;
