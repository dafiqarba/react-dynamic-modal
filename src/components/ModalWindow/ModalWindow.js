import { Wrapper, Card, CardText, Header, HeaderText, Name } from './../../styled-components/ModalWindow-styled';
import { Batch, Content, DataContainer, DataLabel, Data } from './../../styled-components/ModalWindow-styled';

import ModalAvatar from './ModalAvatar';
import ModalSocialMedia from './ModalSocialMedia';

function ModalWindow(props) {
  const dataLength = props.data.length;

  return (
    <Wrapper onClick={props.onClose} state={props.modalState} length={dataLength}>
      {props.data.map((user) => (
        <Card key={user.key} length={dataLength}>
          <ModalAvatar avatar={user.avatar} />
          <CardText>
            <Header>
              <HeaderText>
                <Name>{user.name}</Name>
                <Batch>#Prodemy</Batch>
              </HeaderText>
            </Header>
            <Content>
              <DataContainer>
                <DataLabel>Tanggal Lahir</DataLabel>
                <Data>{user.birthdate}</Data>
              </DataContainer>
              <DataContainer>
                <DataLabel>Pendidikan</DataLabel>
                <Data>{user.education}</Data>
              </DataContainer>
              <DataContainer>
                <DataLabel>Jenis Kelamin</DataLabel>
                <Data>{user.gender}</Data>
              </DataContainer>
              <DataContainer>
                <DataLabel>Agama</DataLabel>
                <Data>{user.religion}</Data>
              </DataContainer>
              <DataContainer>
                <DataLabel>Email</DataLabel>
                <Data>{user.email}</Data>
              </DataContainer>
              <DataContainer>
                <DataLabel>No HP</DataLabel>
                <Data>{user.phone}</Data>
              </DataContainer>
            </Content>
            <ModalSocialMedia git={user.git} insta={user.insta} />
          </CardText>
        </Card>
      ))}
    </Wrapper>
  );
}

export default ModalWindow;
