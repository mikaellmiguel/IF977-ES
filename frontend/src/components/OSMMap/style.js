import styled from 'styled-components';

export const MapWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

export const LinkWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const StyledLink = styled.a`
  color: blue;
  text-decoration: underline;
  &:hover {
    color: darkblue;
  }
`;