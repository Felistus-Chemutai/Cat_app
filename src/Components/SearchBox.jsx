import React from 'react'

const SearchBox = ({ onFilter }) => {

  function handleChange(event) {
    const searchText = event.target.value;
    onFilter(searchText);
  }
  
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default SearchBox
