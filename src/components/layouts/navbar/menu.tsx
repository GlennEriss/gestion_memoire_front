import {FaBook} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {RiLogoutCircleLine} from 'react-icons/ri'
import { pathnames } from '@/navigation'


export const MENU = [
  {
    title: 'theses',
    link: pathnames['/dashboard/theses'],
    icon: <FaBook size={22}/>
  }
]

export const USER_MENU = [
  {
    title: 'profile',
    link: '',
    icon: <BiUserCircle size={25}/>
  },
  {
    title: 'logout',
    icon: <RiLogoutCircleLine size={25}/>
  }
]