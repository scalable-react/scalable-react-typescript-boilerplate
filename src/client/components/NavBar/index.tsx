import * as React from 'react';
import { Anchor } from 'ui';
import { NavBarProps } from './types';
import {
  Nav,
  InnerNav,
  LeftMenu,
  RightMenu,
  Menu,
  MenuItem,
} from './styles';

export default function NavBar({
  logoText,
  links,
}: NavBarProps): JSX.Element {
  return (
    <Nav>
      <InnerNav>
        <LeftMenu>
          <Anchor plain path="/" color="#007acc">
            {logoText}
          </Anchor>
        </LeftMenu>
        <RightMenu>
          <Menu>
            {links.map((item, i) =>
              <MenuItem key={i}>
                <Anchor
                  plain
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
