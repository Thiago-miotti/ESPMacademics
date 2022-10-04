import './style.css';
import Filtro from '../../components/Filtro'
import DataTable from '../../components/DataTable';
import BotaoAdicionar from '../../components/BotaoAdd';

function EmpresaPage(){
    return(
        <div>
            <Filtro/>
            <BotaoAdicionar title='Adicionar empresa'/>
            <DataTable/>
        </div>
    );
}

export default EmpresaPage;