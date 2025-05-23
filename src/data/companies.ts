import alma from '@/assets/alma.svg'
import athinketh from '@/assets/athinketh.svg'
import rw_interactive from '@/assets/rw_interactive.svg'
import sky from '@/assets/sky.svg'
export interface Company {
  name: string;
  icon: string;
  showName?: boolean;
}

export const companies: Company[] = [
  {
    name: 'RW Interactive',
    icon: rw_interactive,
  },
  {
    name: 'Sky Portugal',
    icon: sky,
  },
  {
    name: 'ALMA',
    icon: alma,
    showName: true,
  },
  {
    name: 'ATHINKETH',
    icon: athinketh,
  }
];