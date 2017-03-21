export interface NavLink {
  text: string;
  url: string;
}

export interface State {
  isMobile: boolean;
  navLinks: NavLink[];
  logoText: string;
};

export const initialState: State = {
  isMobile: false,
  navLinks: [
    {
      text: 'Docs',
      url: '/docs',
    },
    {
      text: 'About',
      url: '/about',
    },
    {
      text: 'Blog',
      url: '/blog',
    },
  ],
  logoText: 'React + TypeScript',
};

export default State;
