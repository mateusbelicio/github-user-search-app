const filterData = (data) => {
  return {
    bio: data.bio,
    company: {
      available: data.company ? true : false,
      name: data.company || 'Not Available',
    },
    followers: data.followers,
    following: data.following,
    imageSrc: data.avatar_url,
    location: data.location,
    name: data.name,
    repos: data.public_repos,
    userName: data.login,
    twitter: {
      available: data.twitter_username ? true : false,
      username: data.twitter_username || 'Not Available',
      link: data.twitter_username ? `https://twitter.com/${data.twitter_username}` : '#',
    },
    website: {
      available: data.site_admin ? true : false,
      name: data.site_admin || 'Not Available',
      link: data.site_admin || '#',
    },
    getCreatedDate: () => {
      const createAtDate = new Date(data.created_at);
      const options = { year: 'numeric', month: 'short', day: 'numeric' };

      const formatedDate = createAtDate.toLocaleDateString('en', options);

      const date = formatedDate.split(' ');
      return `Joined ${date.at(1).slice(0, -1)} ${date.at(0)} ${date.at(2)}`;
    },
  };
};

export default filterData;
