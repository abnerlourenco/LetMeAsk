import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/new-room.scss'

export function NewRoom() {
  return(
    <div id="page-new-room">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo.</strong>
        <p>Compartilhe seu conhecimento tirando as dúvidas da sua audiência.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetMeAsk" />
          <strong>Crie uma nova sala</strong>
          <form>
            <input 
              type="text"
              placeholder="Digite um nome para a sala" 
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <div className="existing-room">
            <p>Quer entrar em uma sala já existente?
              <a href="/">Clique aqui</a>
            </p>
            
          </div>
        </div>
      </main>
    </div>
  )
}