import HeaderStyle from './HeaderStyle';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Search from '../Search/Search';

const Header = () => {
  return (
    <HeaderStyle className='container header'>
      <div className='flex flex--center flex--btw'>
        <h1>Devfinder</h1>
        <ThemeSwitcher />
      </div>
      <Search />
    </HeaderStyle>
  );
};

export default Header;
