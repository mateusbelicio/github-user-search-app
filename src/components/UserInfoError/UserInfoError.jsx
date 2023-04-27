import UserInfoErrorStyle from './UserInfoErrorStyle';
import icons from '../../assets/icons.svg';

const UserInfoError = () => {
  return (
    <UserInfoErrorStyle>
      <svg>
        <use href={`${icons}#icon-search`} />
      </svg>
      <p>User not found. Try again...</p>
    </UserInfoErrorStyle>
  );
};

export default UserInfoError;
