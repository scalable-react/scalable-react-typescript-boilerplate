const styled = require('styled-components').default;

export const Nav = styled.nav`
  width: 100%;
  background: #0a0a0a;
  color: #fefefe;
  padding: .5rem;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100px;
`;

export const InnerNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftMenu = styled.div`
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const LeftMenuText = styled.a`
  color: #007acc;
  font-weight: 700;
`;

export const RightMenu = styled.div`
  max-width: 400px;
  margin-right: 1rem;
`;

export const Menu = styled.ul`
  margin: 0;
  list-style-type: none;
`;

export const MenuItem = styled.li`
  display: table-cell;
  vertical-align: middle;
`;

export const Anchor = styled.a`
  color: #fff;
  display: block;
  padding: .7rem 1rem;
  line-height: 1;
`;
