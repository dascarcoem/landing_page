import Filter from '@/components/alumni/Filter'
import FilterByDropdown from '@/components/alumni/FilterByDropdown'
import Hero from '@/components/alumni/Hero'
import { RegisterModal } from '@/components/alumni/RegisterModal'
import Search from '@/components/alumni/Search'
import Tab from '@/components/alumni/Tab'
import React from 'react'

const tempData = [{ imgPath: '/images/home.png', name: "John Doe", role: "SDE", company: "ABC" }, { imgPath: '/images/home.png', name: "John Doe", role: "SDE", company: "ABC", linkedin: "https://www.linkedin.com/" }, { imgPath: '/images/home.png', name: "Jane Smith", role: "SDE", company: "XYZ", linkedin: "https://www.linkedin.com/" }]
const Alumni = () => {
  return (
    <main className='pt-20 flex flex-col bg-black' >
      <Hero />
      <RegisterModal />
      <div className='flex justify-center items-center *:m-4 pb-9 flex-row flex-wrap'>
        <Search />
        <FilterByDropdown type="Year" values={[2024, 2023, 2022]} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:w-2/3 mx-auto *:mx-10 gap-6'>
        {tempData.map((obj, i) => <Tab key={i} imgPath={obj.imgPath} name={obj.name} role={obj.role} company={obj.company} linkedin={obj.linkedin} />)}
      </div>
    </main>
  )
}

export default Alumni
