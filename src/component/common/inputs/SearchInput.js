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
        className="w-full border-none text-dark text-normal rounded-lg focus:none block pl-10 p-2.5 outline-none focus-within:none placeholder:text-label"
        placeholder='Search Land, Housing Properties, Real Estate...'
        required
      />
    </div>
  </form>
);

export default SearchInput;
