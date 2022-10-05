import './style.css';
import React from 'react'
import Filtro from '../../components/Filtro'
import DataTable from '../../components/DataTable';
import BotaoAdicionar from '../../components/BotaoAdd';
import DrawerContainer from '../../components/DrawerContainer';

function EmpresaPage(){
  const [openDrawer, setOpenDrawer] = React.useState(false);

    return(
        <div>
            <Filtro/>
            <BotaoAdicionar title='Adicionar empresa' action={() => setOpenDrawer(true)} />
            <DrawerContainer title='Cadastrar' isOpen={openDrawer} onClose={() => setOpenDrawer(false)}>
                <div>
                    <input />
                    <input />
                </div>
            </DrawerContainer>
            <DataTable/>
        </div>
    );
}

export default EmpresaPage;