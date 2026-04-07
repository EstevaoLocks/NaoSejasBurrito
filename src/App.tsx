import './styles/reset.css'
import './styles/App.css'
import { Navbar } from './components/Navbar'
import { CardReceitaTaco } from './components/CardReceitaTaco'

// Imagens
import burritoPratoSemFundo from './assets/img/burrito_prato_semFundo.png'
import burritoDeFrango from './assets/img/burrito-de-frango.png'
import srirachaHotSauce from './assets/img/Sriracha-Hot-Sauce.png'
import nachosCapa from './assets/img/nachos-capa.png'
import caldoLoucoReceita from './assets/img/caldo-louco-receita.png'

function App() {
  return (
    <>
      <header id="pageHeader" className="pageHeader">
        <Navbar />

        <div className="header-container">
          <div className="msgHeader-container">
            <h2>Saiba qual comida mexicana é a melhor para você!</h2>

            <div className="logo-container">
              <a href="#pageHeader"><h2 className="logo-header">Não sejas burrito!</h2></a>
            </div>

            <div className="iconeSetaHeader-container">
              <a href="#tiposReceita">
                <svg className="iconeSetaHeader" viewBox="0 0 34 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.7197 28.5843C33.0126 28.2914 33.4873 28.2914 33.7802 28.5843C34.0731 28.8772 34.0731 29.352 33.7802 29.6449L17.5302 45.8949C17.2373 46.1878 16.7626 46.1878 16.4697 45.8949L0.219678 29.6449C-0.0732157 29.352 -0.0732157 28.8772 0.219678 28.5843C0.512571 28.2914 0.987331 28.2914 1.28022 28.5843L17 44.304L32.7197 28.5843Z" fill="#50514F" />
                  <path opacity="0.5" d="M19.0312 2.03125C19.0312 1.49253 18.8172 0.97587 18.4363 0.594936C18.0553 0.214003 17.5387 0 16.9999 0C16.4612 0 15.9446 0.214003 15.5636 0.594936C15.1827 0.97587 14.9687 1.49253 14.9687 2.03125H19.0312ZM14.9687 2.03125V44.3939L15.9393 45.3646H18.0156L19.0313 44.3938L19.0312 2.03125H14.9687Z" fill="#50514F" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="tiposReceita" className="tiposReceita-section">
          <header className="tiposReceita-header">
            <figure className="imgBurrito-tiposReceita">
              <img className="imgTaco-tiposReceita" src={burritoPratoSemFundo} alt="Imagem de um taco mexicano" />
            </figure>
            <h2 className="tiposReceita-title titlePrimary">Que tipo de receita você deseja fazer?</h2>
          </header>

          <div className="menuTiposReceita-container">
            <h3>Nossos principais tipos de pratos</h3>

            <div className="menuTiposReceita">
              {/* Lanches */}
              <a href="assets/pages/receitas-lanches.html">
                <figure className="linkTipoReceita">
                    <img src={burritoDeFrango} alt="Imagem de lanches mexicanos"/>
                    <figcaption>
                      Lanches
                    </figcaption>
                </figure>
              </a>

              {/* Molhos */}
              <a href="assets/pages/receitas-molhos.html">
                <figure className="linkTipoReceita">
                    <img src={srirachaHotSauce} alt="Imagem de um hot sauce mexicano" />
                    <figcaption>
                      Molhos
                    </figcaption>
                </figure>
              </a>

              {/* Petiscos */}
              <a href="assets/pages/receitas-petiscos.html">
                <figure className="linkTipoReceita">
                  <img src={nachosCapa} alt="Imagem de petiscos mexicanos" />
                    <figcaption>
                      Petiscos
                    </figcaption>
                </figure>
              </a>

              {/* Caldos */}
              <a href="assets/pages/receitas-caldos.html">
                <figure className="linkTipoReceita">
                  <img src={caldoLoucoReceita} alt="Imagem de caldos mexicanos" />
                    <figcaption>
                      Caldos
                    </figcaption>
                </figure>
              </a>

            </div>
          </div>
        </section>
        
        <section id="receitaSemana" className="receitasSemana-section">
            <h2 className="titleSecondary">Receita da Semana</h2>
            <CardReceitaTaco />
        </section>
      </main>
    </>
  )
}

export default App
