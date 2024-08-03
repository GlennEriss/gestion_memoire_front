import {FaBook} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {RiLogoutCircleLine} from 'react-icons/ri'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'


export const MENU = [
  {
    title: 'theses',
    link: '/dashboard/theses',
    icon: <FaBook size={22}/>
  },
  {
    title: 'users',
    link: '/dashboard/users',
    icon: <AiOutlineUsergroupAdd size={25}/>
  },
]

export const USER_MENU = [
  {
    title: 'profile',
    link: '',
    icon: <BiUserCircle size={30}/>
  }
]