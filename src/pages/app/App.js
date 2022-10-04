import './App.css';
import LoginPage from '../Login';
import HomePage from '../Home';
import PageContainer from '../../components/PageContainer'

function App() {
  return (
    // <LoginPage/>
    <PageContainer title='Home' children={<HomePage />}/>
  );
}

export default App;
