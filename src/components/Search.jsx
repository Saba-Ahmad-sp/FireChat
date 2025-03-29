const Search = () => {
  return (
    <>
      <label htmlFor="search" className="flex bg-[#9ACBD0] h-8 rounded-tr-2xl rounded-bl-2xl mt-2">
        <input
          type="text"
          className=" bg-[#9ACBD0] w-3/4 focus:outline-none text-black p-3 text-sm rounded-2xl"
          placeholder="Search"
          id="search"
        />
        <svg
          className="w-1/4 p-2 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 460 512"
        >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
      </label>
    </>
  );
};

export default Search;
