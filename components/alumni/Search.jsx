import React from 'react'

export default function Search() {
    return (
        <div className='border rounded-sm text-white border-gray-300 w-2/3 md:w-1/3'>
            <input className='w-full h-9 p-2 bg-gray-900 rounded-sm' type='text' placeholder='Search alumni by name, company, or role' />
        </div>
    )
}
