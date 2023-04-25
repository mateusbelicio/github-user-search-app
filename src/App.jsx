const userData = {
  "login": "octocat",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "twitter_username": "monatheoctocat",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z"
}

function App() {
  console.log(userData.bio);

  return (
    <>
      <header>
        <h1>Devfinder</h1>
        <button className="theme-btn">Theme</button>
      </header>

      <form noValidate className="form" action="#">
        <label htmlFor="search-input" className="form__label">Search</label>
        <input type="text" className="form__input" id="search-input" />
        <button type="submit" className="form__btn">Search</button>
      </form>

      <section className="info">
        <div className="info__header">
          <img className="info__image" src="" alt="User photo" />
          <div className="flex flex--wrap">
            <div className="flex flex--col">
              <h2 className="info__name">{userData.name}</h2>
              <h3 className="info__username">@{userData.login}</h3>
            </div>
            <span className="info__join-date">Joined 25 Jan 2011</span>
          </div>
        </div>

        <div className="info__content">
          <p className="info__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum 
            eveniet cupiditate culpa ut unde itaque.
          </p>
          <ul className="info__data-list">
            <li className="info__data-item">
              <h4 className="info__data-name">Repos</h4>
              <span className="info__data-value">8</span>
            </li>
            <li className="info__data-item">
              <h4 className="info__data-name">Followers</h4>
              <span className="info__data-value">3983</span>
            </li>
            <li className="info__data-item">
              <h4 className="info__data-name">Following</h4>
              <span className="info__data-value">9</span>
            </li>
          </ul>
          <ul className="info__about-list">
            <li className="info__about-item">
              <span className="info__about-icon">icon</span>
              <span className="info__about-location">San Francisco</span>
            </li>
            <li className="info__about-item">
              <span className="info__about-icon">icon</span>
              <span className="info__about-site"><a href="https://github.blog" target="_blank">https://github.blog</a></span>
            </li>
            <li className="info__about-item">
              <span className="info__about-icon">icon</span>
              <span className="info__about-twitter">Not Available</span>
            </li>
            <li className="info__about-item">
              <span className="info__about-icon">icon</span>
              <span className="info__about-work">@github</span>
            </li>
          </ul>
        </div>
      </section>
    </> 
  )
}

export default App
