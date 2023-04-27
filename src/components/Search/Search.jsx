import { useContext } from 'react';
import { UserContext } from '../../App';

import SearchStyle from './SearchStyle';
import icons from '../../assets/icons.svg';

const Search = () => {
  const { setUserName } = useContext(UserContext);

  const searchUser = function (event) {
    event.preventDefault();
    setUserName(event.target.username.value);
  };

  return (
    <SearchStyle noValidate className='search' onSubmit={searchUser}>
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
