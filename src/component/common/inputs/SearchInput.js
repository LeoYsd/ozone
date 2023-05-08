import { SearchIcon } from "../../../assets/svgs";

const SearchInput = () => (
  <form className="flex items-center w-full">
    <label htmlFor="search" className="sr-only">
      Search
    </label>
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {SearchIcon}
      </div>
      <input
        type="text"
        id="search"
        className="bg-gray-50 w-full border text-dark text-normal rounded-lg focus:ring-lailac focus:border-lailac block pl-10 p-2.5 focus-within:border-lailac focus-within:outline-lailac placeholder:text-label"
        placeholder='Search Land, Housing Properties, Real Estate...'
        required
      />
    </div>
  </form>
);

export default SearchInput;
