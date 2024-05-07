import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'
import { USER_MENU } from './menu'
import Logout from './Logout'
import UserMenuItem from './UserMenuItem'

export default function UserProfilMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
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
      </PopoverContent>
    </Popover>
  )
}
