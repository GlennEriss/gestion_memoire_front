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
        <Button variant="link">
          <AiOutlineSearch size={25}/>
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
