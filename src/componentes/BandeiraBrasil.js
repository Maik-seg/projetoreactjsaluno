import React from 'react';
import './BandeiraBrasil.css';

const bandeiraBrasil = "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg";
const bandeiraParana = "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg";

function BandeiraBrasil() {
    return (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
            <div className="bandeira-brasil">
                <img src={bandeiraBrasil} alt="Bandeira do Brasil" width={200} />
                <p style={{ textAlign: 'center' }}>Brasil</p>
            </div>
            <div className="bandeira-brasil">
                <img src={bandeiraParana} alt="Bandeira do Paraná" width={200} />
                <p style={{ textAlign: 'center' }}>Paraná</p>
            </div>
        </div>
    );
}

export default BandeiraBrasil;