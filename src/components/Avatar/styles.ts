const styled = require('styled-components').default;

export const AvatarDiv = styled.div`
  background-image: ${(props) => props.avatarUrl};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;
