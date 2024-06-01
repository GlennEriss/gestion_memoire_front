import {FaBook} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {RiLogoutCircleLine} from 'react-icons/ri'
import { pathnames } from '@/navigation'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'


export const MENU = [
  {
    title: 'theses',
    link: pathnames['/dashboard/theses'],
    icon: <FaBook size={22}/>
  },
  {
    title: 'register',
    link: pathnames['/dashboard/register'],
    icon: <AiOutlineUsergroupAdd size={25}/>
  },
]

export const USER_MENU = [
  {
    title: 'profile',
    link: '',
    icon: <BiUserCircle size={30}/>
  },
  {
    title: 'logout',
    icon: <RiLogoutCircleLine size={25}/>
  }
]