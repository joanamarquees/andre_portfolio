export interface Company {
  name: string;
  icon: string;
  showName?: boolean;
}

export const companies: Company[] = [
  {
    name: 'RW Interactive',
    icon: '/src/assets/rw_interactive.svg',
  },
  {
    name: 'Sky Portugal',
    icon: '/src/assets/sky.svg',
  },
  {
    name: 'ALMA',
    icon: '/src/assets/alma.svg',
    showName: true,
  },
];