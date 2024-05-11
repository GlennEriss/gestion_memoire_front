import React from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useTranslations } from 'next-intl'
import MenuItem from './MenuItem'
import { MENU } from './menu'
import LogoImg from '@/components/logo/LogoImg'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { Link, pathnames } from '@/navigation'
export default function MenuNavigation() {
  const t = useTranslations('MenuNavigation')
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='link'>
          <HiOutlineMenuAlt1 size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <SheetHeader className='flex-row items-center justify-start'>
          <Link href={pathnames['/dashboard/theses'].en} >
            <LogoImg />
          </Link>
          <SheetTitle>
            {t('description')}
          </SheetTitle>
        </SheetHeader>
        <div className='py-3 px-5'>
          <SheetDescription>
            {t('overview')}
          </SheetDescription>
          <div className='my-5'>
            {
              MENU.map((item, key) =>
                <MenuItem item={item} key={key} />
              )
            }
          </div>
        </div>

      </SheetContent>
    </Sheet>
  )
}
