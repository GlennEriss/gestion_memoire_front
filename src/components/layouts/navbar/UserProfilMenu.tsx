import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'
import { USER_MENU } from './menu'
import Logout from './Logout'
import UserMenuItem from './UserMenuItem'
import { Separator } from '@/components/ui/separator'
import DeconnexionButton from './DeconnexionButton'

export default function UserProfilMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='link'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 space-y-2">
        <div className='grid grid-cols-4 p-3'>
          <Avatar className='row-span-2'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='col-span-3'>
            <h1 className='font-bold'>John Doe</h1>
            <h1 className='text-gray-500'>example@gmail.com</h1>
          </div>
        </div>
        <Separator />
        <div>
          {
            USER_MENU.map((item, key) =>
              item.title === 'logout' ?
                (
                  <Logout key={key} item={item} />
                ) :
                (
                  <div key={key}>
                    <UserMenuItem item={item} key={key} />
                  </div>
                )
            )
          }
          <DeconnexionButton/>
        </div>
      </PopoverContent>
    </Popover>
  )
}
