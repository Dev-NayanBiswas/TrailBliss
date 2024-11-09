import { BsSearch } from "react-icons/bs";

function Search() {
    function handleSearch(e){
        e.preventDefault()
        console.log(e.target.value)
    }
  return (
    <span className='whitespace-nowrap'>
      <form className='border-[1px] px-4 my-2 rounded-e-full rounded-s-full border-[var(--primary-color)]' onSubmit={handleSearch}>
        <input className="border-none focus:outline-none w-4/5" type='search' onChange={handleSearch} />
        <button type="submit" className='w-full relative -right-6 md:-right-5'>
          <BsSearch fill="var(--primary-color)" fontWeight='500'/>
        </button>
      </form>
    </span>
  );
}

export default Search;
