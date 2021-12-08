import { Wrapper, ContentWrapper, Links, Icon } from './../../styled-components/ModalSocialMedia-styled';

function ModalSocialMedia(props) {
  const socialLinks = [
    { key: '1', link: ['https://github.com/' + props.git], icon: 'fab fa-github' },
    { key: '2', link: ['https:/instagram.com/' + props.insta], icon: 'fab fa-instagram' },
  ];
  return (
    <Wrapper>
      {socialLinks.map((social) => (
        <ContentWrapper key={social.key}>
          <Links href={social.link}>
            <Icon className={social.icon} />
          </Links>
        </ContentWrapper>
      ))}
    </Wrapper>
  );
}

export default ModalSocialMedia;
