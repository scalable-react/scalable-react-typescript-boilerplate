const styled = require('styled-components').default;

export const Article = styled.article`
  padding: 60px;
  background: #FFF;
  margin-bottom: 14px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(46, 61, 73, 0.2);
  border: 1px solid #dbe2e8;
  max-width: 960px;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  margin: 60px 0px;
  padding: 20px;
`;
