import bio from './about';

interface Contributor {
  name: string;
  avatar: string;
  github: string;
  bio: string;
};

const contributors: Contributor[] = [
  {
    name: 'Ryan Collins',
    avatar: 'https://avatars0.githubusercontent.com/u/13810084?v=3&s=460',
    github: 'https://github.com/RyanCCollins',
    bio:  `${bio.aboutRyan}`,
  },
  {
    name: 'Abhishek Ghosh',
    avatar: 'https://raw.githubusercontent.com/ghoshabhi/cdn/master/profile_ag.jpg',
    github: 'https://github.com/ghoshabhi',
    bio: `${bio.aboutAbhi}`,
  },
];

export default contributors;
