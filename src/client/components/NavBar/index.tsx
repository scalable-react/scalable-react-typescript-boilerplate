import * as React from 'react';
import { Anchor } from 'components';
const {
  Nav,
  InnerNav,
  LeftMenu,
  RightMenu,
  Menu,
  MenuItem,
} = require('./styles');

interface NavBarProps extends React.Props<NavBar> {
  logoText: string;
  links: Array<{ url: string, text: string }>;
}

class NavBar extends React.Component<NavBarProps, undefined> {
  public render() {
    return (
      <Nav>
        <InnerNav>
          <LeftMenu>
            <Anchor path="/" color="#007acc">
              {this.props.logoText}
            </Anchor>
          </LeftMenu>
          <RightMenu>
            <Menu>
              {this.props.links.map((item, i) =>
                <MenuItem key={i}>
                  <Anchor
                    path={item.url}
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
