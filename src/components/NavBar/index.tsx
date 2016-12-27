import * as React from 'react';
const Nav = require('./styles').Nav;
const InnerNav = require('./styles').InnerNav;
const LogoImage = require('./styles').LogoImage;
const LeftMenu = require('./styles').LeftMenu;
const LeftMenuText = require('./styles').LeftMenuText;
const RightMenu = require('./styles').RightMenu;
const Menu = require('./styles').Menu;
const MenuItem = require('./styles').MenuItem;
const Anchor = require('./styles').Anchor;

interface IProps extends React.Props<NavBar> {
  logoText: string,
  links: Array<{ url: string, text: string }>
};

class NavBar extends React.Component<IProps, any> {
  render() {
    return (
      <Nav>
        <InnerNav>
          <LeftMenu>
            <LeftMenuText href="/">
              {this.props.logoText}
            </LeftMenuText>
          </LeftMenu>
          <RightMenu>
            <Menu>
              {this.props.links.map((item, i) =>
                <MenuItem>
                  <Anchor
                    key={i}
                    href={item.url}
                  >
                    {item.text}
                  </Anchor>
                </MenuItem>
              )}
            </Menu>
          </RightMenu>
        </InnerNav>
      </Nav>
    );
  }
}

export default NavBar;
