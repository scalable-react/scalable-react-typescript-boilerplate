const styled = require('styled-components').default;

export const Card = styled.div`
  width: 384px;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`;

export const CardThumbnail = styled.div`
  background: url('${(props) => props.image}') center center / cover no-repeat;
  min-height: 192px;
  align-items: center;
  justify-content: center;
`;

export const CardHeading = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  margin-bottom: 12px;
  line-height: 1.23;
`;

export const CardDescription = styled.p`
  color: #333;
  font-size: 24px;
  line-height: 1.167;
  margin-top: 24px;
  margin-bottom: 24px;
`;

