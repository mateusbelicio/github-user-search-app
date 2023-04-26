import UserInfoStyle from './UserInfoStyle';
import icons from '../../assets/icons.svg';

const userData = {
  login: 'mateusbelicio',
  id: 55671476,
  node_id: 'MDQ6VXNlcjU1NjcxNDc2',
  avatar_url: 'https://avatars.githubusercontent.com/u/55671476?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/mateusbelicio',
  html_url: 'https://github.com/mateusbelicio',
  followers_url: 'https://api.github.com/users/mateusbelicio/followers',
  following_url: 'https://api.github.com/users/mateusbelicio/following{/other_user}',
  gists_url: 'https://api.github.com/users/mateusbelicio/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/mateusbelicio/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/mateusbelicio/subscriptions',
  organizations_url: 'https://api.github.com/users/mateusbelicio/orgs',
  repos_url: 'https://api.github.com/users/mateusbelicio/repos',
  events_url: 'https://api.github.com/users/mateusbelicio/events{/privacy}',
  received_events_url: 'https://api.github.com/users/mateusbelicio/received_events',
  type: 'User',
  site_admin: false,
  name: 'Mateus Belício',
  company: null,
  blog: '',
  location: 'Brazil',
  email: null,
  hireable: null,
  bio: 'Studying to become a Front-End Developer.',
  twitter_username: null,
  public_repos: 37,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: '2019-09-22T21:57:07Z',
  updated_at: '2023-04-18T17:02:05Z',
};

const getDateCreate = function (dateISO) {
  const createAtDate = new Date(dateISO);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  const formatedDate = createAtDate.toLocaleDateString('en', options);

  const date = formatedDate.split(' ');
  return `Joined ${date.at(1).slice(0, -1)} ${date.at(0)} ${date.at(2)}`;
};

const UserInfo = () => {
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
        <li className='info__about-item' data-available={userData.twitter_username ? true : false}>
          <svg className='info__about-icon'>
            <use href={`${icons}#icon-twitter`} />
          </svg>
          <span className='info__about-value'>
            <a
              href={
                userData.twitter_username ? `https://twitter.com/${userData.twitter_username}` : '#'
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
            {userData.company ? `@${userData.company}` : 'Not Available'}
          </span>
        </li>
      </ul>
    </UserInfoStyle>
  );
};

export default UserInfo;
