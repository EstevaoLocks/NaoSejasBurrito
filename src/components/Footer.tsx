function socialIconsAlert() {
  if (confirm("Ops! Parece que os links das redes sociais ainda não estão configurados. Mas você pode visitar um Github bem maneiro clicando em 'OK' ;D")) {
    window.open("https://github.com/estevaolocks", "_blank");
  }
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="rowFooter">
                <div className="colFooter">
                    <div className="title-colFooter">
                        <div className="logo-container">
                            <a href="#pageHeader"><h2 className="logo">Não sejas burrito!</h2></a>
                        </div>
                        <p>Receitas e mais</p>
                    </div>
                    <div className="content-colFooter"></div>
                </div>
                <div className="colFooter"></div>
                <div className="colFooter">
                    <div className="title-colFooter">
                        <h5>Receitas</h5>
                    </div>
                    <div className="content-colFooter">
                        <p><a className="linkPagesFooter" href="assets/pages/receitas.html">Todas as Receitas</a></p>
                        <p><a className="linkPagesFooter" href="assets/pages/receitas-lanches.html">Lanches</a></p>
                        <p><a className="linkPagesFooter" href="assets/pages/receitas-molhos.html">Molhos</a></p>
                        <p><a className="linkPagesFooter" href="assets/pages/receitas-petiscos.html">Petiscos</a></p>
                        <p><a className="linkPagesFooter" href="assets/pages/receitas-caldos.html">Caldos</a></p>
                    </div>
                </div>
                <div className="colFooter">
                    <div className="title-colFooter">
                        <h5>Nos acompanhe nas Redes</h5>
                    </div>
                    <div className="content-colFooter">
                        {/*Icone Github */}
                        <a href="https://github.com/estevaolocks">
                            <svg className="iconGitHubFooter iconRedesSociaisFooter rotateLeft" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 4.5C14.61 4.4 13.67 4 12 4C10.33 4 9.39 4.4 9 4.5C8.47 4.07 7.06 3 5.5 3C5.16 4 5.21 5.22 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.69 4.98 13.08 6 14C7.02 14.92 8.11 15.37 9.5 15.5C8.85 16.04 9 17.37 9 18V22H15V18C15 17.37 15.15 16.04 14.5 15.5C15.89 15.37 16.98 14.92 18 14C19.02 13.08 19.5 11.69 19.5 9.5C19.5 8 19.25 7 18.5 6C18.79 5.22 18.84 4 18.5 3C16.94 3 15.53 4.07 15 4.5Z" fill="#F4F1DE" fill-opacity="0.3"/>
                                <path d="M15 21C15 21 15 18.73 15 18C15 17.37 15.15 16.04 14.5 15.5C15.89 15.37 16.98 14.92 18 14C19.02 13.08 19.5 11.69 19.5 9.5C19.5 8 19.25 7 18.5 6C18.79 5.22 18.84 4 18.5 3C16.94 3 15.53 4.07 15 4.5C14.61 4.4 13.67 4 12 4C10.33 4 9.39 4.4 9 4.5C8.47 4.07 7.06 3 5.5 3C5.16 4 5.21 5.22 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.69 4.98 13.08 6 14C7.02 14.92 8.11 15.37 9.5 15.5C8.85 16.04 9 17.37 9 18C9 18.73 9 21 9 21" stroke="#F4F1DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 19C7.59 19 6.16 18.44 5.31 17.81C4.47 17.18 4.22 16.15 3 15.5" stroke="#F4F1DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>

                        {/*Icone Twitter */}
                        <a href="#" onClick={socialIconsAlert}>
                            <svg className="iconTwitterFooter iconRedesSociaisFooter rotateRight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.89 7.33989C19.8 7.66989 19.4 8.49989 18.72 9.28989C18.27 17.9699 9.85 20.7899 4.08 17.8799C3.29 16.8299 6.93 17.2599 8.26 15.2499C3.23 12.6799 3.63 5.80989 4.64 6.08989C7.01 9.27989 10.83 9.56989 11.45 9.27989C11.45 8.54989 11.14 6.95989 12.86 5.62989C13.85 4.91989 15.92 4.28989 17.79 6.31989C18.11 6.52989 18.57 6.61989 19.26 6.46989C19.67 6.25989 20.21 6.39989 19.93 7.12989L19.89 7.33989Z" fill="#F4F1DE" fill-opacity="0.3" stroke="#F4F1DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>

                        {/*Icone You Tube */}
                        <a href="#" onClick={socialIconsAlert}>
                            <svg className="iconYouTubeFooter iconRedesSociaisFooter rotateLeft" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5C21 5 21 5 21 12C21 19 21 19 12 19C3 19 3 19 3 12C3 5 3 5 12 5Z" fill="#F4F1DE" fill-opacity="0.3" stroke="#F4F1DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.0078 12L10.5 14.6289V9.37012L15.0078 12Z" fill="#F4F1DE" stroke="#F4F1DE"/>
                            </svg>
                        </a>

                        {/*Icone Instagram */}
                        <a href="#" onClick={socialIconsAlert}>
                            <svg className="iconInstagramFooter iconRedesSociaisFooter rotateRight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 4.172C3 5.343 3 7.229 3 11V13C3 16.771 3 18.657 4.172 19.828C5.344 20.999 7.229 21 11 21H13C16.771 21 18.657 21 19.828 19.828C20.999 18.656 21 16.771 21 13V11C21 7.229 21 5.343 19.828 4.172C18.656 3.001 16.771 3 13 3H11C7.229 3 5.343 3 4.172 4.172ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z" fill="#F4F1DE" fill-opacity="0.25"/>
                                <path d="M3 11C3 7.229 3 5.343 4.172 4.172C5.344 3.001 7.229 3 11 3H13C16.771 3 18.657 3 19.828 4.172C20.999 5.344 21 7.229 21 11V13C21 16.771 21 18.657 19.828 19.828C18.656 20.999 16.771 21 13 21H11C7.229 21 5.343 21 4.172 19.828C3.001 18.656 3 16.771 3 13V11Z" stroke="#F4F1DE" stroke-width="1.2"/>
                                <path d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z" fill="#F4F1DE"/>
                                <path d="M12 15.4001C13.8777 15.4001 15.4 13.8779 15.4 12.0001C15.4 10.1223 13.8777 8.6001 12 8.6001C10.1222 8.6001 8.59998 10.1223 8.59998 12.0001C8.59998 13.8779 10.1222 15.4001 12 15.4001Z" stroke="#F4F1DE" stroke-width="1.2"/>
                            </svg>
                        </a>




                    </div>
                </div>
            </div>
            <hr/>
            <div className="rowFooter copyright">
                <div>
                    <p className="copyright">Copyright © 2026 - Não sejas burrito! Todos os direitos reservados.</p>
                </div>
                <div>
                    <p className="copyright">Developed by <a href="https://github.com/estevaolocks">Estevão Locks</a></p>
                </div>
            </div>
        </footer>
    )
}