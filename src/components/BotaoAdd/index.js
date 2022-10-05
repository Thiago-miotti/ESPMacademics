import './style.css';

function BotaoAdicionar(props){
    return(
        <div className="button">
            <button onClick={props.action}>{props.title}</button>
        </div>
    );
}

export default BotaoAdicionar;