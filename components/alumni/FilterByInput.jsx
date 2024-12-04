import React from 'react'

export default function FilterByInput({ type }) {
    return (
        <div>
            <div className='bg-slate-200 border rounded-sm border-gray-300 w-[180px]'>
                <input className='w-full h-8 p-2' type='text' placeholder={`Filter By ${type}`} />
            </div>
        </div>
    )
}
