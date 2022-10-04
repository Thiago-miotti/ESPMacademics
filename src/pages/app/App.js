import './App.css';
import LoginPage from '../Login';
import HomePage from '../Home';
import EmpresaPage from '../Empresas'
import PageContainer from '../../components/PageContainer'

function App() {
  return (
    // <LoginPage/>
    // <PageContainer title='Home' children={<HomePage />}/>
    <PageContainer title='Empresas' children={<EmpresaPage/>}/>
  );
}

export default App;
