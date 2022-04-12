import React from "react";

export default function Footer(){
    return(
      <footer>
          <div className="d-flex text-center justify-content-between py-4 my-4 border-top">
                <div className="container-fluid">
                <div className="container">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Início</a></li>
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Sobre</a></li>
                        </ul>
                    </div>
                    <p>Este projeto foi criado por Felipe Carli &middot; Biblionode &copy; 2022 </p>
                </div>
            </div>
      </footer>
    );
}
