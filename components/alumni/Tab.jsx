import React from 'react'
import Image from 'next/image'

export default function Tab({ imgPath, name, role, company }) {
    return (
        <div className='w-[300px] flex flex-col rounded-md bg-slate-50 border border-gray-200'>
            <Image
                className='rounded-md'
                src={imgPath}
                alt='Cover Photo'
                width={300}
                height={272}
            />
            <div className='py-2 px-3 break-words'>
                <div className='font-bold text-xl'>
                    {name}
                </div>
                <div>
                    {role} @ {company}
                </div>
            </div>
        </div>
    )
}
