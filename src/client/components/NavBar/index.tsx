import * as React from 'react';
const {
  Nav,
  InnerNav,
  LeftMenu,
  LeftMenuText,
  RightMenu,
  Menu,
  MenuItem,
  Anchor,
} = require('./styles');

interface NavBarProps extends React.Props<NavBar> {
  logoText: string;
  links: Array<{ url: string, text: string }>;
};

class NavBar extends React.Component<NavBarProps, any> {
  public render() {
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
                <MenuItem key={i}>
                  <Anchor
                    href={item.url}
                  >
                    {item.text}
                  </Anchor>
                </MenuItem>,
              )}
            </Menu>
          </RightMenu>
        </InnerNav>
      </Nav>
    );
  }
}

export default NavBar;
