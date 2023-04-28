import UserInfoStyle from './UserInfoStyle';
import UserInfoError from '../UserInfoError/UserInfoError';
import UserInfoLoading from '../UserInfoLoading/UserInfoLoading';

import icons from '../../assets/icons.svg';

const UserInfo = ({ data, isError, isLoading }) => {
  if (isLoading) return <UserInfoLoading />;
  else if (isError) return <UserInfoError />;
  else
    return (
      <UserInfoStyle className='info'>
        <img className='info__image' src={data.imageSrc} alt='User photo' />

        <div className='info__header'>
          <h2 className='info__name'>{data.name}</h2>
          <h3 className='info__username'>@{data.userName}</h3>
          <span className='info__join-date'>{data.getCreatedDate()}</span>
        </div>
        <p className='info__description'>{data.bio}</p>

        <ul className='info__data-list'>
          <li className='info__data-item'>
            <h4 className='info__data-name'>Repos</h4>
            <span className='info__data-value'>{data.repos}</span>
          </li>
          <li className='info__data-item'>
            <h4 className='info__data-name'>Followers</h4>
            <span className='info__data-value'>{data.followers}</span>
          </li>
          <li className='info__data-item'>
            <h4 className='info__data-name'>Following</h4>
            <span className='info__data-value'>{data.following}</span>
          </li>
        </ul>

        <ul className='info__about-list'>
          <li className='info__about-item' data-available={data.location ? true : false}>
            <svg className='info__about-icon'>
              <use href={`${icons}#icon-location`} />
            </svg>
            <span className='info__about-value'>{data.location}</span>
          </li>
          <li className='info__about-item' data-available={data.website.available}>
            <svg className='info__about-icon'>
              <use href={`${icons}#icon-website`} />
            </svg>
            <span className='info__about-value'>
              <a href={data.website.link} target='_blank'>
                {data.website.name}
              </a>
            </span>
          </li>
          <li className='info__about-item' data-available={data.twitter.available}>
            <svg className='info__about-icon'>
              <use href={`${icons}#icon-twitter`} />
            </svg>
            <span className='info__about-value'>
              <a href={data.twitter.link} target='_blank'>
                {data.twitter.username}
              </a>
            </span>
          </li>
          <li className='info__about-item' data-available={data.company.available}>
            <svg className='info__about-icon'>
              <use href={`${icons}#icon-company`} />
            </svg>
            <span className='info__about-value'>{data.company.name}</span>
          </li>
        </ul>
      </UserInfoStyle>
    );
};

export default UserInfo;
