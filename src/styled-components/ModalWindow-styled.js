import styled from 'styled-components';

export const Wrapper = styled.div.attrs((props) => ({
  state: props.state,
  visible: 'visible',
  hidden: 'hidden',
  length: props.length,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  ${(props) => (props.length === 1 || props.length === 0) && 'justify-content: center'};
  min-height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: all 0.35s ease-in;

  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem 0 1rem 0;
  visibility: ${(props) => (props.state ? props.visible : props.hidden)};
  opacity: ${(props) => (props.state ? 1 : 0)};
`;

export const Empty = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
`;

export const Card = styled.div.attrs((props) => ({
  card: props.length,
  marginAmount: '1rem',
}))`
  background-color: #f9f9f9;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);

  width: 65rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: row;
  margin-bottom: ${(props) => (props.card > 0 ? props.marginAmount : 0)};
`;

export const CardText = styled.div`
  height: 100%;
  width: 65%;

  color: #484946;
  padding: 1.5rem;
`;

export const Header = styled.div`
  margin-bottom: 2.5rem;
`;

export const HeaderText = styled.h1`
  margin-top: 1rem;
  text-align: center;
`;

export const Name = styled.span`
  display: block;
  margin-bottom: -1.2rem;

  font-size: 2.2rem;
`;

export const Batch = styled.span`
  font-size: 1.5rem;
  color: #f9f9f9;

  display: inline-block;
  background-color: #484946;
  padding: 0 0.5rem 0 0.5rem;
  border-radius: 0.5rem;
`;

export const Content = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const DataContainer = styled.div`
  float: left;
  margin-right: 1rem;
  width: 47%;
  margin-bottom: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const DataLabel = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const Data = styled.p`
  border-bottom: 0.2rem solid #5bc6ac;
  width: 100%;
  font-size: 1.45rem;
`;
