import './style.css';
import ImagemTelaLogin from "../../assets/imagemTelaLogin.svg";
import LogoEspm from "../../assets/LogoESPMFundoVermelho.svg";
import LogoMicrosoft from "../../assets/LogoMicrosoft.svg";

function LoginPage() {
  return (
    <div className='containerPai'>
      <div className='containerFilho'>
        <div className='metade1'>
          <img src={ImagemTelaLogin} alt='imagemTelaLogin'/>
          <p>BEM VINDO AO ESPM <span>academics</span></p>
        </div>
        <div className='metade2'>
          <img src={LogoEspm} alt="Logo ESPM"/>
          <button> <img src={LogoMicrosoft} alt='logo microsoft'/> Entrar com Microsoft</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
