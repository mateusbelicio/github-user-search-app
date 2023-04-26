import SearchStyle from './SearchStyle';
import icons from '../../assets/icons.svg';

const Search = () => {
  const searchUser = function (event) {
    event.preventDefault();
    console.log(event.target.username.value);
  };

  return (
    <SearchStyle noValidate className='search' action='#' onSubmit={searchUser}>
      <svg className='search__icon'>
        <use href={`${icons}#icon-search`} />
      </svg>
      <input
        type='text'
        className='search__input'
        id='search-input'
        name='username'
        placeholder='Search GitHub username…'
        aria-label='Search GitHub username…'
      />
      <button type='submit' className='search__btn'>
        Search
      </button>
    </SearchStyle>
  );
};

export default Search;
