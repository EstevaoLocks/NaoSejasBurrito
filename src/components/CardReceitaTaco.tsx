// Imagens
import tacosMexicanos from './../assets/img/tacosMexicanos.png'

export function CardReceitaTaco() {
    return (
        <div className="cardReceitaSemana">
            {/* Div da esquerda do card */}
            <div className="containerEsquerda-receitaSemana">
                <div className="imgReceitaSemana-container">
                    {/* Img da receita da semana */}
                    <figure>
                        <img src={tacosMexicanos} alt="Imagem de Tacos mexicanos recheados com carne, tomat, cebola..." />
                    </figure>
                    {/* Ícones de estrela da receita da semana */}
                    <div className="starsReceitaSemana">
                        <div className="containerStarsReceita">
                            <svg className="starIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.483 16.7671C17.1162 17.0953 15.6893 17.0794 14.3301 16.7208C12.9709 16.3622 11.7219 15.6721 10.6948 14.7124C9.6678 13.7526 8.89481 12.5531 8.44511 11.2213C7.9954 9.88951 7.883 8.46696 8.11799 7.08105C8.08279 7.11615 8.04502 7.14858 8.00499 7.17805C7.72499 7.39105 7.37499 7.47005 6.67499 7.62805L6.03999 7.77205C3.57999 8.32905 2.34999 8.60706 2.05699 9.54806C1.76499 10.4881 2.60299 11.4691 4.27999 13.4301L4.71399 13.9371C5.18999 14.4941 5.42899 14.7731 5.53599 15.1171C5.64299 15.4621 5.60699 15.8341 5.53499 16.5771L5.46899 17.2541C5.21599 19.8711 5.08899 21.1791 5.85499 21.7601C6.62099 22.3411 7.77299 21.8121 10.075 20.7511L10.672 20.4771C11.326 20.1751 11.653 20.0251 12 20.0251C12.347 20.0251 12.674 20.1751 13.329 20.4771L13.924 20.7511C16.227 21.8111 17.379 22.3411 18.144 21.7611C18.911 21.1791 18.784 19.8711 18.531 17.2541L18.483 16.7671Z" fill="#F2CC8F" />
                                <path opacity="0.5" d="M9.15301 5.408L8.825 5.996C8.465 6.642 8.28501 6.965 8.00501 7.178C8.04501 7.148 8.08267 7.11567 8.11801 7.081C7.88296 8.46701 7.99535 9.88967 8.4451 11.2216C8.89486 12.5535 9.66794 13.7531 10.6951 14.7128C11.7223 15.6726 12.9715 16.3627 14.3308 16.7212C15.6901 17.0797 17.1171 17.0954 18.484 16.767L18.464 16.577C18.393 15.834 18.357 15.462 18.464 15.117C18.571 14.773 18.809 14.494 19.286 13.937L19.72 13.43C21.397 11.47 22.235 10.489 21.942 9.548C21.65 8.607 20.42 8.328 17.96 7.772L17.324 7.628C16.625 7.47 16.275 7.391 15.994 7.178C15.714 6.965 15.534 6.642 15.174 5.996L14.847 5.408C13.58 3.136 12.947 2 12 2C11.053 2 10.42 3.136 9.15301 5.408Z" fill="#F2CC8F" />
                            </svg>
                        </div>
                        <div className="containerStarsReceita">
                            <svg className="starIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.483 16.7671C17.1162 17.0953 15.6893 17.0794 14.3301 16.7208C12.9709 16.3622 11.7219 15.6721 10.6948 14.7124C9.6678 13.7526 8.89481 12.5531 8.44511 11.2213C7.9954 9.88951 7.883 8.46696 8.11799 7.08105C8.08279 7.11615 8.04502 7.14858 8.00499 7.17805C7.72499 7.39105 7.37499 7.47005 6.67499 7.62805L6.03999 7.77205C3.57999 8.32905 2.34999 8.60706 2.05699 9.54806C1.76499 10.4881 2.60299 11.4691 4.27999 13.4301L4.71399 13.9371C5.18999 14.4941 5.42899 14.7731 5.53599 15.1171C5.64299 15.4621 5.60699 15.8341 5.53499 16.5771L5.46899 17.2541C5.21599 19.8711 5.08899 21.1791 5.85499 21.7601C6.62099 22.3411 7.77299 21.8121 10.075 20.7511L10.672 20.4771C11.326 20.1751 11.653 20.0251 12 20.0251C12.347 20.0251 12.674 20.1751 13.329 20.4771L13.924 20.7511C16.227 21.8111 17.379 22.3411 18.144 21.7611C18.911 21.1791 18.784 19.8711 18.531 17.2541L18.483 16.7671Z" fill="#F2CC8F" />
                                <path opacity="0.5" d="M9.15301 5.408L8.825 5.996C8.465 6.642 8.28501 6.965 8.00501 7.178C8.04501 7.148 8.08267 7.11567 8.11801 7.081C7.88296 8.46701 7.99535 9.88967 8.4451 11.2216C8.89486 12.5535 9.66794 13.7531 10.6951 14.7128C11.7223 15.6726 12.9715 16.3627 14.3308 16.7212C15.6901 17.0797 17.1171 17.0954 18.484 16.767L18.464 16.577C18.393 15.834 18.357 15.462 18.464 15.117C18.571 14.773 18.809 14.494 19.286 13.937L19.72 13.43C21.397 11.47 22.235 10.489 21.942 9.548C21.65 8.607 20.42 8.328 17.96 7.772L17.324 7.628C16.625 7.47 16.275 7.391 15.994 7.178C15.714 6.965 15.534 6.642 15.174 5.996L14.847 5.408C13.58 3.136 12.947 2 12 2C11.053 2 10.42 3.136 9.15301 5.408Z" fill="#F2CC8F" />
                            </svg>
                        </div>
                        <div className="containerStarsReceita">
                            <svg className="starIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.483 16.7671C17.1162 17.0953 15.6893 17.0794 14.3301 16.7208C12.9709 16.3622 11.7219 15.6721 10.6948 14.7124C9.6678 13.7526 8.89481 12.5531 8.44511 11.2213C7.9954 9.88951 7.883 8.46696 8.11799 7.08105C8.08279 7.11615 8.04502 7.14858 8.00499 7.17805C7.72499 7.39105 7.37499 7.47005 6.67499 7.62805L6.03999 7.77205C3.57999 8.32905 2.34999 8.60706 2.05699 9.54806C1.76499 10.4881 2.60299 11.4691 4.27999 13.4301L4.71399 13.9371C5.18999 14.4941 5.42899 14.7731 5.53599 15.1171C5.64299 15.4621 5.60699 15.8341 5.53499 16.5771L5.46899 17.2541C5.21599 19.8711 5.08899 21.1791 5.85499 21.7601C6.62099 22.3411 7.77299 21.8121 10.075 20.7511L10.672 20.4771C11.326 20.1751 11.653 20.0251 12 20.0251C12.347 20.0251 12.674 20.1751 13.329 20.4771L13.924 20.7511C16.227 21.8111 17.379 22.3411 18.144 21.7611C18.911 21.1791 18.784 19.8711 18.531 17.2541L18.483 16.7671Z" fill="#F2CC8F" />
                                <path opacity="0.5" d="M9.15301 5.408L8.825 5.996C8.465 6.642 8.28501 6.965 8.00501 7.178C8.04501 7.148 8.08267 7.11567 8.11801 7.081C7.88296 8.46701 7.99535 9.88967 8.4451 11.2216C8.89486 12.5535 9.66794 13.7531 10.6951 14.7128C11.7223 15.6726 12.9715 16.3627 14.3308 16.7212C15.6901 17.0797 17.1171 17.0954 18.484 16.767L18.464 16.577C18.393 15.834 18.357 15.462 18.464 15.117C18.571 14.773 18.809 14.494 19.286 13.937L19.72 13.43C21.397 11.47 22.235 10.489 21.942 9.548C21.65 8.607 20.42 8.328 17.96 7.772L17.324 7.628C16.625 7.47 16.275 7.391 15.994 7.178C15.714 6.965 15.534 6.642 15.174 5.996L14.847 5.408C13.58 3.136 12.947 2 12 2C11.053 2 10.42 3.136 9.15301 5.408Z" fill="#F2CC8F" />
                            </svg>
                        </div>
                        <div className="containerStarsReceita">
                            <svg className="starIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.483 16.7671C17.1162 17.0953 15.6893 17.0794 14.3301 16.7208C12.9709 16.3622 11.7219 15.6721 10.6948 14.7124C9.6678 13.7526 8.89481 12.5531 8.44511 11.2213C7.9954 9.88951 7.883 8.46696 8.11799 7.08105C8.08279 7.11615 8.04502 7.14858 8.00499 7.17805C7.72499 7.39105 7.37499 7.47005 6.67499 7.62805L6.03999 7.77205C3.57999 8.32905 2.34999 8.60706 2.05699 9.54806C1.76499 10.4881 2.60299 11.4691 4.27999 13.4301L4.71399 13.9371C5.18999 14.4941 5.42899 14.7731 5.53599 15.1171C5.64299 15.4621 5.60699 15.8341 5.53499 16.5771L5.46899 17.2541C5.21599 19.8711 5.08899 21.1791 5.85499 21.7601C6.62099 22.3411 7.77299 21.8121 10.075 20.7511L10.672 20.4771C11.326 20.1751 11.653 20.0251 12 20.0251C12.347 20.0251 12.674 20.1751 13.329 20.4771L13.924 20.7511C16.227 21.8111 17.379 22.3411 18.144 21.7611C18.911 21.1791 18.784 19.8711 18.531 17.2541L18.483 16.7671Z" fill="#F2CC8F" />
                                <path opacity="0.5" d="M9.15301 5.408L8.825 5.996C8.465 6.642 8.28501 6.965 8.00501 7.178C8.04501 7.148 8.08267 7.11567 8.11801 7.081C7.88296 8.46701 7.99535 9.88967 8.4451 11.2216C8.89486 12.5535 9.66794 13.7531 10.6951 14.7128C11.7223 15.6726 12.9715 16.3627 14.3308 16.7212C15.6901 17.0797 17.1171 17.0954 18.484 16.767L18.464 16.577C18.393 15.834 18.357 15.462 18.464 15.117C18.571 14.773 18.809 14.494 19.286 13.937L19.72 13.43C21.397 11.47 22.235 10.489 21.942 9.548C21.65 8.607 20.42 8.328 17.96 7.772L17.324 7.628C16.625 7.47 16.275 7.391 15.994 7.178C15.714 6.965 15.534 6.642 15.174 5.996L14.847 5.408C13.58 3.136 12.947 2 12 2C11.053 2 10.42 3.136 9.15301 5.408Z" fill="#F2CC8F" />
                            </svg>
                        </div>
                        <div className="containerStarsReceita">
                            <svg className="starIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.483 16.7671C17.1162 17.0953 15.6893 17.0794 14.3301 16.7208C12.9709 16.3622 11.7219 15.6721 10.6948 14.7124C9.6678 13.7526 8.89481 12.5531 8.44511 11.2213C7.9954 9.88951 7.883 8.46696 8.11799 7.08105C8.08279 7.11615 8.04502 7.14858 8.00499 7.17805C7.72499 7.39105 7.37499 7.47005 6.67499 7.62805L6.03999 7.77205C3.57999 8.32905 2.34999 8.60706 2.05699 9.54806C1.76499 10.4881 2.60299 11.4691 4.27999 13.4301L4.71399 13.9371C5.18999 14.4941 5.42899 14.7731 5.53599 15.1171C5.64299 15.4621 5.60699 15.8341 5.53499 16.5771L5.46899 17.2541C5.21599 19.8711 5.08899 21.1791 5.85499 21.7601C6.62099 22.3411 7.77299 21.8121 10.075 20.7511L10.672 20.4771C11.326 20.1751 11.653 20.0251 12 20.0251C12.347 20.0251 12.674 20.1751 13.329 20.4771L13.924 20.7511C16.227 21.8111 17.379 22.3411 18.144 21.7611C18.911 21.1791 18.784 19.8711 18.531 17.2541L18.483 16.7671Z" fill="#F2CC8F" />
                                <path opacity="0.5" d="M9.15301 5.408L8.825 5.996C8.465 6.642 8.28501 6.965 8.00501 7.178C8.04501 7.148 8.08267 7.11567 8.11801 7.081C7.88296 8.46701 7.99535 9.88967 8.4451 11.2216C8.89486 12.5535 9.66794 13.7531 10.6951 14.7128C11.7223 15.6726 12.9715 16.3627 14.3308 16.7212C15.6901 17.0797 17.1171 17.0954 18.484 16.767L18.464 16.577C18.393 15.834 18.357 15.462 18.464 15.117C18.571 14.773 18.809 14.494 19.286 13.937L19.72 13.43C21.397 11.47 22.235 10.489 21.942 9.548C21.65 8.607 20.42 8.328 17.96 7.772L17.324 7.628C16.625 7.47 16.275 7.391 15.994 7.178C15.714 6.965 15.534 6.642 15.174 5.996L14.847 5.408C13.58 3.136 12.947 2 12 2C11.053 2 10.42 3.136 9.15301 5.408Z" fill="#F2CC8F" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Título da receita da semana */}
                <header className="titleReceitaSemana-container">
                    <div className="titleReceitaSemana">
                        <p className="categoriaReceitaSemana">Lanches - massas</p>
                        <h3 className="subtitleTertiary">Tacos</h3>
                    </div>
                    <p className="textReceitaSemana">
                        Tacos são pratos típicos da culinária mexicana, feitos com tortillas de milho ou trigo recheadas com carne, frango, peixe ou vegetais. São servidos com molhos e acompanhamentos como cebola, tomate e guacamole.
                    </p>
                </header>

                {/* Ingredientes da receita da semana */}
                <div className="receitaReceitaSemana-container">
                    <h3 className="posSubtitleTertiary">Ingredientes:</h3>
                    <p className="parteReceitaSemana">Massa</p>
                    <ul className="ingredientesReceitaSemana">
                        <li className="itemIngredienteReceitaSemana">2 xícaras de farinha de milho pré-cozida da marca venezuelana PAN (branco ou amarelo)</li>
                        <li className="itemIngredienteReceitaSemana">2 xícaras de água (480 mililitros)</li>
                        <li className="itemIngredienteReceitaSemana">1 colher de sopa de manteiga (opcional)</li>
                        <li className="itemIngredienteReceitaSemana">1 colher de chá de sal (colher rasa)</li>
                    </ul>
                    <p className="parteReceitaSemana">Recheio</p>
                    <ul className="ingredientesReceitaSemana">
                        <li className="itemIngredienteReceitaSemana">½ quilograma de carne de porco para grelhar ou fritar</li>
                        <li className="itemIngredienteReceitaSemana">1 colher de chá de sal grosso</li>
                        <li className="itemIngredienteReceitaSemana">1 cebola roxa picada</li>
                        <li className="itemIngredienteReceitaSemana">suco de limão</li>
                    </ul>
                </div>
            </div>

            {/* Div da direita do card */}
            <div className="containerDireita-receitaSemana">
                {/* Lista do modo de preparo da receita da semana */}
                <ul className="modoPreparoReceitaSemana">
                    <li className="itemModoPreparoReceitaSemana">Prepare a massa de taco caseira (que também pode ser usada como massa burrito): coloque a água e a manteiga (opcional) numa tigela e, pouco a pouco, enquanto mexe com a mão, adicione a farinha e o sal. Misture e amasse bem para desfazer os grumos.</li>
                    <li className="itemModoPreparoReceitaSemana">À medida que mistura e amassa, poderá sentir que a massa de tacos está ficando mais consistente. Após amassar por 5 minutos, modele em forma de bola e reserve na geladeira por 10 minutos.</li>
                    <li className="itemModoPreparoReceitaSemana">Após esse tempo pegue novamente na massa e volte a amassar. Separe porções, modele em forma de bolinhas e coloque num prato.</li>
                    <li className="itemModoPreparoReceitaSemana">Coloque uma das bolinhas de massa numa tábua de cozinha forrada com plástico filme, para não grudar. Espalme a bolinha de massa com a mão, cubra com um pedaço de plástico filme e abra com a ajuda de um rolo.</li>
                    <li className="itemModoPreparoReceitaSemana">Desgrude o plástico de cima e use uma tigela para cortar o disco de massa, como na foto. Coloque num prato e repita o procedimento com as restantes bolinhas de massa para tacos, empilhando os discos de massa no prato.</li>
                    <li className="itemModoPreparoReceitaSemana">Para cozinhar a massa de tacos simplesmente leve ao fogo alto uma frigideira (sem untar) e coloque um disco de massa. Deixe até dourar, vire e deixe por mais uns segundinhos, para dourar desse lado também. Retire para um prato ou grade de resfriamento e repita.</li>
                    <li className="itemModoPreparoReceitaSemana">Enquanto isso prepare o recheio de carne do taco mexicano! Para simplificar o preparo sugerimos simplesmente fritar ou grelhar carne de porco da sua preferência, temperando com sal e suco de limão. Depois retire e pique em pedacinhos, como na foto.</li>
                    <li className="itemModoPreparoReceitaSemana">Finalmente monte os tacos mexicanos: coloque uma porção de carne no centro da massa, e adicione cebola roxa picada. Se quiser, poderá completar também com guacamole, alface, queijo cheddar ou oaxaca (queijo branco mexicano). Sirva com uma cervejinha e bom apetite!</li>
                </ul>

                {/* Logo */}
                <div className="logo-container">
                    <a href="#pageHeader"><h2 className="logo-cardReceitaSemana">Não sejas burrito!</h2></a>
                </div>
            </div>
            <div className="blurPratosTipicos"></div>
            <footer>
                <a href="" className="verMaisReceitaSemana link-container">
                    <p>Ver mais</p>
                </a>

                <div className="link-container">
                    <a href="assets/pages/receitas/molhos/guacamole.html">
                        {/* Ícone de tijela */}
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12.2339H2.75C2.75 16.8419 8.5485 20.8039 8.5485 20.8039H12" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.44202 13.2867C5.44202 16.6827 9.25602 19.1887 9.25602 19.1887M12 12.2337H21.25C21.25 16.8417 15.4515 20.8037 15.4515 20.8037H12M7.04702 12.2337C6.37402 9.71422 10.874 7.98222 14.912 7.44722L15.307 6.72021L16.899 8.65522L16.0255 8.79721C15.598 10.2022 13.458 12.2337 13.458 12.2337" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.755 12.2336C7.899 10.9366 9.403 9.47662 15.141 7.72412" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.289 7.90477C13.119 8.99177 10.589 10.2408 8.81604 12.2338M15.7125 8.41827C13.4575 11.4813 12 12.2338 12 12.2338M10.7525 12.2338C12.1125 11.4388 15.4975 8.15677 15.4975 8.15677M16.5385 8.22627L20.614 4.92377C20.681 4.86961 20.7367 4.80275 20.7778 4.72704C20.819 4.65132 20.8447 4.56824 20.8537 4.48255C20.8627 4.39685 20.8546 4.31023 20.8301 4.22765C20.8055 4.14506 20.7649 4.06814 20.7105 4.00127C20.6564 3.93434 20.5895 3.87874 20.5139 3.83766C20.4382 3.79658 20.3552 3.77082 20.2695 3.76186C20.1839 3.7529 20.0974 3.76091 20.0148 3.78543C19.9323 3.80995 19.8554 3.85051 19.7885 3.90477L15.7125 7.20727" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.9125 7.44727L16.0255 8.79727" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p>Veja a receita</p>
                    </a>
                </div>
            </footer>
        </div>
    )
}