import React, { useState } from "react";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(false);

    const usuarioCorreto = "admin";
    const senhaCorreta = "123456";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            window.alert("Login realizado com sucesso!");
        } else {
            window.location.href = "https://www.copel.com";
        }
    };

    return (
        <div style={{ maxWidth: 300, margin: "100px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuário:</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                </div>
                <button type="submit" style={{ width: "100%" }}>Entrar</button>
            </form>
        </div>
    );
}

export default Login;