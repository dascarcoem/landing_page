import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Tab({ imgPath, name, role, company, linkedin }) {
    return (
        <div className='w-[300px] text-white flex flex-col rounded-md bg-gray-900 hover:border-[#40E0D0]/50 border-[#40E0D0]/20 border'>
            <Image
                className='rounded-md'
                src={imgPath}
                alt='Cover Photo'
                width={300}
                height={272}
            />
            <div className='py-2 px-3 break-words'>
                <div className='py-1 font-bold text-xl'>
                    {name}
                </div>
                <div className='flex flex-row py-1 justify-between'>
                    <div>
                        {role} @ {company}
                    </div>
                    {linkedin && <Link href={linkedin}>
                        <Image src="/icons/linkedin.png" width={25} height={25} alt='LinkedIn' />
                    </Link>}
                </div>
            </div>
        </div>
    )
}
