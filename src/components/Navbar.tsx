export function Navbar() {
    return (
        <nav>
            <div className="logo-container">
                <a href="#pageHeader"><h2 className="logo">Não sejas burrito!</h2></a>
            </div>
            <button className="hamburgerBtn"></button>
            <ul className="linksMenu-container">
                <a className="linkMenu-container" href="#tiposReceita"><li className="linkMenu">Tipos de prato</li></a>
                <a className="linkMenu-container" href="#receitaSemana"><li className="linkMenu">Da Semana</li></a>
                <a className="linkMenu-container" href="#pratosTipicos"><li className="linkMenu">Pratos Típicos</li></a>
                <a className="linkMenu-container" href="assets/pages/receitas.html"><li className="linkMenu">Receitas</li></a>
            </ul>
        </nav>
    )
}