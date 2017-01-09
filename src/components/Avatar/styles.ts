const styled = require('styled-components').default;

export const AvatarContainer = styled.div`
  padding: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AvatarDiv = styled.div`
  background: url(${(props) => props.avatarUrl});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin: 30px;
`;

export const AvatarName = styled.p`
  font-size: 12px;
  margin: 3px;
`;
