import { Wrapper, ContentWrapper, Avatar } from './../../styled-components/ModalAvatar-styled';

function ModalAvatar(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Avatar src={props.avatar}></Avatar>
      </ContentWrapper>
    </Wrapper>
  );
}

export default ModalAvatar;
