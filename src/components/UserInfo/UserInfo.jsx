import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import UserInfoStyle from './UserInfoStyle';
import UserInfoLoading from './UserInfoLoading';
import UserInfoError from './UserInfoError';

import icons from '../../assets/icons.svg';

const GITHUB_API_BASE_URL = 'https://api.github.com/users/';

const getDateCreate = function (dateISO) {
  const createAtDate = new Date(dateISO);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  const formatedDate = createAtDate.toLocaleDateString('en', options);

  const date = formatedDate.split(' ');
  return `Joined ${date.at(1).slice(0, -1)} ${date.at(0)} ${date.at(2)}`;
};

const UserInfo = () => {
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { username } = useParams();

  useEffect(() => {
    const getData = async () => {
      const url = username ? GITHUB_API_BASE_URL + username : GITHUB_API_BASE_URL + 'octocat';

      try {
        const response = await axios.get(url);
        setUserData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUserData('');
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    getData();
  }, [username]);

  if (loading) return <UserInfoLoading />;
  else if (error) return <UserInfoError />;
  else
    return (
      <UserInfoStyle className='info'>
        <img className='info__image' src={userData.avatar_url} alt='User photo' />

        <h2 className='info__name'>{userData.name}</h2>
        <h3 className='info__username'>@{userData.login}</h3>
        <span className='info__join-date'>{getDateCreate(userData.created_at)}</span>
        <p className='info__description'>{userData.bio}</p>

        <ul className='info__data-list'>
          <li className='info__data-item'>
            <h4 className='info__data-name'>Repos</h4>
            <span className='info__data-value'>{userData.public_repos}</span>
          </li>
          <li className='info__data-item'>
            <h4 className='info__data-name'>Followers</h4>
            <span className='info__data-value'>{userData.followers}</span>
          </li>
          <li className='info__data-item'>
            <h4 className='info__data-name'>Following</h4>
            <span className='info__data-value'>{userData.following}</span>
          </li>
        </ul>

        <ul className='info__about-list'>
          <li className='info__about-item' data-available={userData.location ? true : false}>
            <svg className='info__about-icon'>
              <use href={`${icons}#icon-location`} />
            </svg>
            <span className='info__about-value'>{userData.location}</span>
          </li>
          <li className='info__about-item' data-available={userData.site_admin ? true : false}>
            <svg className='info__about-icon'>
              <use href={`${icons}#icon-website`} />
            </svg>
            <span className='info__about-value'>
              <a href={userData.site_admin || '#'} target='_blank'>
                {userData.site_admin || 'Not Available'}
              </a>
            </span>
          </li>
          <li
            className='info__about-item'
            data-available={userData.twitter_username ? true : false}
          >
            <svg className='info__about-icon'>
              <use href={`${icons}#icon-twitter`} />
            </svg>
            <span className='info__about-value'>
              <a
                href={
                  userData.twitter_username
                    ? `https://twitter.com/${userData.twitter_username}`
                    : '#'
                }
                target='_blank'
              >
                {userData.twitter_username || 'Not Available'}
              </a>
            </span>
          </li>
          <li className='info__about-item' data-available={userData.company ? true : false}>
            <svg className='info__about-icon'>
              <use href={`${icons}#icon-company`} />
            </svg>
            <span className='info__about-value'>
              {userData.company ? userData.company : 'Not Available'}
            </span>
          </li>
        </ul>
      </UserInfoStyle>
    );
};

export default UserInfo;
