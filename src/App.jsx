import Header from './components/Header/Header';
import UserInfo from './components/UserInfo/UserInfo';

const GITHUB_API_BASE_URL = 'https://api.github.com/users/';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <UserInfo />
      </main>
    </>
  );
}

export default App;
