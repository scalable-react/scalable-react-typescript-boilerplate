const styled = require('styled-components').default;

export const AvatarContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AvatarDiv = styled.div`
  background: url(${(props) => props.avatarUrl});
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 150px;
  min-height: 150px !important;
  transform: translate(0px, -75px);
  position: absolute;
`;

export const AvatarName = styled.p`
  font-size: 2.5rem;
  margin-top: .5em;
  margin-bottom: .5em;
  margin-top: 85px;
  font-family: 'Hind';
`;
