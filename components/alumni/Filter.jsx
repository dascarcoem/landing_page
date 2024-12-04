import React from 'react'
import FilterByDropdown from './FilterByDropdown'
import FilterByInput from './FilterByInput'

export default function Filter() {
    return (
        <div className='p-9 *:pt-5 justify-evenly flex flex-row flex-wrap'>
            <FilterByInput type="Company" />
            <FilterByDropdown type="Year" values={[2024, 2023, 2022]} />
            <FilterByDropdown type="Role" values={["SDE-1", "SDE-2", "Senior Engineer"]} />
        </div>
    )
}
