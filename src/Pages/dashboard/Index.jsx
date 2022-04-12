import React from "react";

export default function Dashboard(){
    return(
        <main>
            <div className="container-fluid col-md-10 mx-auto py-5">
                <div className="p-5 mb-3 bg-light border rounded-3">
                    <div className="Container-fluid py-5">
                        <h1 className="display-5 fw-bold">Bem-vindo ao Biblionode</h1>
                        <p className="col-md-8 fs-4">Sua Biblioteca Online e Física.</p>
                    </div>
                </div>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6 py-3">
                        <div className="h-100 p-5 mb-4 bg-light border rounded-3">
                            <h2>Reservas em Aberto</h2>
                            <p>Verifique quais serão os seus próximos empréstimos.</p>
                            <button className="btn btn-outline-secondary" href="/bookings" type="button">Verificar</button>
                        </div>
                    </div>
                    <div className="col-md-6 py-3">
                        <div className="h-100 p-5 mb-4 bg-light border rounded-3">
                            <h2>Próximas Devoluções</h2>
                            <p>Verifique quais empréstimos precisam ser devolvidos no próximos dias.</p>
                            <button className="btn btn-outline-secondary" type="button">Verificar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}