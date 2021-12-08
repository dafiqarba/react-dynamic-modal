import { useState } from 'react';
import { Wrapper, ContentWrapper, Button, ResetModal, ViewModal } from './styled-components/App-styled';
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
    
  };

  const closeHandler = () => {
    setModalState(false);
  };
  const resetHandler = () => {
    setUserData('');
    setModalState(false);
  };
  const openModal = () => {
    setModalState(true);
  }
  console.log(modalState);
  return (
    <Wrapper>
      <ContentWrapper>
        <FormProfile onSubmitData={submitDataHandler} />
        <Button>
          <ViewModal onClick={openModal}>View Modal</ViewModal>
          <ResetModal onClick={resetHandler}>Reset Modal</ResetModal>
        </Button>
        <ModalWindow data={userData} modalState={modalState} onClose={closeHandler}/>
      </ContentWrapper>
    </Wrapper>
  );
}

export default App;
