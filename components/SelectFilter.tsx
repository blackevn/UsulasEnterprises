import { ChangeEventHandler, SetStateAction } from "react"

interface SelectFilterProps {
    onChange: ChangeEventHandler<HTMLSelectElement>
    value: string | number
    array: string[] | number[]
    modifier?: string
}

const SelectFilter = ({onChange, value, array, modifier}: SelectFilterProps) => {
  return <div>
        <select className={modifier} value={value} onChange={onChange}>
          <option value="">Select {value}</option>
          {/* Add options dynamically based on available years */}
          {array.sort().map(item => (<option key={item} value={item}>{item}</option>))}
          {/* Add more options as needed */}
        </select>
        </div>
}

export default SelectFilter