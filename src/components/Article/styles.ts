const styled = require('styled-components').default;

export const ArticleComponent = styled.article`
  padding: 60px;
  background: #FFF;
  margin-bottom: 14px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(46, 61, 73, 0.2);
  border: 1px solid #dbe2e8;
  max-width: 960px;
  box-sizing: border-box;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
