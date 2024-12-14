import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import React from 'react'

export default function FilterByDropdown({ type, values }) {
    return (
        <div className='text-white'>
            <Select>
                <SelectTrigger className="w-[180px] bg-gray-900 border border-[#40E0D0]/20 py-1 rounded-sm">
                    <SelectValue placeholder={`Filter By ${type}`} />
                </SelectTrigger>
                <SelectContent className='min-w-[180px] cursor-pointer *:py-1 *:my-[1px] w-auto my-2 break-words rounded-sm border-2 border-[#40E0D0]/20 *:text-center'>
                    <SelectItem value="default" className='bg-gray-900'>{`All ${type}s`}</SelectItem>
                    {values.map((value, i) => <SelectItem key={i} value={value} className='bg-gray-900'>{value}</SelectItem>)}
                </SelectContent>
            </Select>
        </div>
    )
}
