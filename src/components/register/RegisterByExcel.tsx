'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Spreadsheet from 'react-spreadsheet'
import * as XLSX from 'xlsx'
import { useTranslations } from 'next-intl'

type RegisterByExcelProps = {
    required: string
}
export default function RegisterByExcel({required}: RegisterByExcelProps) {
  const t = useTranslations('RegisterByExcel')
  const [data, setData] = useState<Array<Array<{ value: any }>>>([])
  const [loading, setLoading] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {return}

    setLoading(true) // Démarre le chargement

    const reader = new FileReader()
    reader.onload = (e) => {
      const arrayBuffer = e.target?.result as ArrayBuffer
      const workbook = XLSX.read(arrayBuffer, { type: 'array' })
      const sheetName = workbook.SheetNames[0]
      const sheet = workbook.Sheets[sheetName]
      const json = XLSX.utils.sheet_to_json(sheet, { header: 1 })

      const spreadsheetData = json.map((row: any) =>
        row.map((cell: any) => ({ value: cell }))
      )
      setData(spreadsheetData)
      setLoading(false) // Arrête le chargement
    }

    reader.readAsArrayBuffer(file)
  }

  return (
    <div className="p-4 grid grid-cols-1 gap-4">
      <div className=''>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="text-sm file:mr-4 file:py-2 file:px-4
            file:rounded-l-lg file:border-0 file:text-white
            file:bg-app-color-green bordertext-gray-400 rounded-r-lg
            cursor-pointer file:cursor-pointer border"
        />
        <p className='text-gray-400 italic text-sm'>
          {required}
        </p>
      </div>

      {loading && (
        <div className="flex items-center justify-center">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-app-color-blue h-4 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}

      {data.length > 0 && (
        <ScrollArea className='max-h-[800px] border rounded-lg'>
          <Spreadsheet data={data} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}

      <div>
        <Button disabled={data.length === 0} className='bg-app-color-green'>
          {t('title')}
        </Button>
      </div>
    </div>
  )
}
