import React from 'react'
import { MdSearch } from 'react-icons/md'
import '../assets/style.scss';
const Search = ({handleSearchText}) => {
  return (
    <div className='search'>
        <MdSearch
          className="searchicon"
          size="20px"
        />
        <input type="text" placeholder='Write word for search' onChange={(event)=> handleSearchText(event.target.value)}/>
    </div>
  )
}

export default Search
