import { Button } from '@/components/ui/button'
import { Command, CommandInput } from '@/components/ui/command'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { CommandList } from 'cmdk'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Search() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='nothing' className='bg-transparent xl:text-gray-500'>
          <div className='hidden xl:border xl:h-10 xl:w-[300px] xl:rounded-l-lg xl:flex xl:items-center xl:p-2'>
            <span>Rechercher</span>
          </div>
          <div className='xl:border xl:h-10 xl:rounded-r-lg xl:p-2'>
            <AiOutlineSearch size={25} />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>

          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
