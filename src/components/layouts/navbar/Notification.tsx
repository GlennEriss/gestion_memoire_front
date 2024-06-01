import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { Link } from '@/navigation'
import { PopoverContent } from '@radix-ui/react-popover'
import { useTranslations } from 'next-intl'
import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
export default function Notifications() {
  const t = useTranslations('Notifications')
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="relative shadow-md bg-white hover:bg-white text-black inline-flex items-center p-3 text-sm font-medium text-center rounded-lg hover:text-app-color-blue focus:outline-none focus:ring-0">
          <IoMdNotificationsOutline size={25} />
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='mt-2 w-80 bg-white p-2 rounded-lg border border-gray-300'>
        <div className="space-y-2 p-3">
          <div className="flex justify-between items-center">
            <h4 className="font-medium leading-none">{t('notifications')}</h4>
            <Link href='' className='text-sm text-gray-500 hover:underline'>
              {t('seeAll')}
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
