import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import iconLogin from '../assets/images/log-in 1.svg'

import { Button } from '../components/Button';

import '../styles/home-auth.scss';

export function Home() {
  const history = useHistory();

  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      console.log(result);
    })
    
    // history.push('/rooms/new');    
  }
  
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo.</strong>
        <p>Compartilhe seu conhecimento tirando as dúvidas da sua audiência.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetMeAsk" />
          <button 
            className="google-button"
            onClick={handleCreateRoom}
          >
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">
            ou entre em uma sala
          </div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala" 
            />
            <Button type="submit">
              <img src={iconLogin} alt="Ícone de entrada" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}