import { createContext, useState, useEffect } from 'react';

import Header from './components/Header/Header';
import UserInfo from './components/UserInfo/UserInfo';
import axios from 'axios';
import filterData from './scripts/filterData';

export const UserContext = createContext();

function App() {
  const GITHUB_API_BASE_URL = 'https://api.github.com/users/';

  const [userName, setUserName] = useState('octocat');
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(GITHUB_API_BASE_URL + userName);
        setUserData(filterData(response.data));
        setError(null);
      } catch (err) {
        setError(err.message);
        setUserData('');
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    getData();
  }, [userName]);

  return (
    <>
      <UserContext.Provider value={{ userName, setUserName }}>
        <Header />
        <main className='container'>
          <UserInfo data={userData} isLoading={loading} isError={error} />
        </main>
      </UserContext.Provider>
    </>
  );
}

export default App;
