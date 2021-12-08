import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 1rem 0;
`;

export const ContentWrapper = styled.div`
  &:not(:last-child) {
    display: block;
    margin-right: 1rem;
    height: 3rem;
    width: 3rem;
  }
`;

export const Links = styled.a`
  color: #484946;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;

  font-size: 2.5rem;
  transition: all 0.1s;

  &:hover {
    font-size: 3rem;
  }
`;

export const Icon = styled.i`
  background-color: none;
`;
