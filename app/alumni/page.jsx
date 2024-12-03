import Filter from '@/components/alumni/Filter'
import Search from '@/components/alumni/Search'
import Tab from '@/components/alumni/Tab'
import React from 'react'

const tempData = [{ imgPath: '/cover.jpg', name: "John Doe", role: "SDE", company: "ABC" }, { imgPath: '/cover.jpg', name: "Jane Smith", role: "SDE", company: "XYZ" }]
const Alumni = () => {
  return (
    <main className='flex flex-col' >
      <Search />
      <Filter />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center *:mx-10 gap-y-5'>
        {tempData.map((obj, i) => <Tab key={i} imgPath={obj.imgPath} name={obj.name} role={obj.role} company={obj.company} />)}
      </div>
    </main>
  )
}

export default Alumni
