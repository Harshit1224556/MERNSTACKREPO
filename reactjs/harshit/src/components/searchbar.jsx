import React from 'react'

const Search = () =>{

    return (
       <div class="flex items-center border border-gray-300 rounded-lg p-2 mt-4">
  <input
    type="text"
    placeholder="Search..."
    class="flex-grow outline-none px-2 py-1 text-gray-700"
  />
  <button class="ml-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  </button>
</div>
    )
}

export default Search