// import { useState } from 'react';

const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [options, setOptions] = useState([
//     'Option 1',
//     'Option 2',
//     'Option 3',
//     'Option 4',
//     // Add more options as needed
//   ]);

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);


//   };

  return (
    <div className="relative">
      {/* <input
        type="text"
        placeholder="Search..."
        className="w-full border border-gray-300 p-2 rounded"
        value={searchTerm}
        onChange={handleSearch}
      /> */}

      {/* {options.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded">
          {options.map((option, index) => (
            <div key={index} className="p-2 hover:bg-gray-100">
              {option} */}
            {/* </div> */}
          {/* ))} */}
        {/* </div>
      )} */}
    </div>
  );
};

export default SearchBar;

