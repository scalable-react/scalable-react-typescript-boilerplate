export interface AppProps extends React.Props<any> {
  children: any;
  actions: {
    appSetMobile: (isMobile: boolean) => void,
  };
  isMobile: boolean;
  navLinks: Array<{ url: string, text: string }>;
  logoText: string;
};
