import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import React from 'react'

export default function FilterByDropdown({ type, values }) {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-[180px] h-8 rounded-sm border-2 border-gray-200 text-black">
                    <SelectValue placeholder={`Filter By ${type}`} />
                </SelectTrigger>
                <SelectContent className='min-w-[180px] *:py-1 *:my-[1px] w-auto my-2 break-words rounded-sm border-2 border-gray-200 *:text-center'>
                    {values.map((value, i) => <SelectItem key={i} value={value} className='hover:bg-gray-300 bg-slate-100'>{value}</SelectItem>)}
                    <SelectItem value="default" className='hover:bg-gray-300 bg-slate-100'>{`All ${type}s`}</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}
