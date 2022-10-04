import './style.css';
import FormularioCadastro from '../FormularioCadastro';

function BotaoAdicionar(props){
    return(
        <div className="button">
            <button onClick={<FormularioCadastro/>}>{props.title}</button>
        </div>
    );
}

export default BotaoAdicionar;