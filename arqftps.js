const ftp = require("basic-ftp"); //modulo do node_modules

enviaArq();
async function enviaArq() {

    const client = new ftp.Client(); //abre instancia
    client.ftp.verbose = true; // registra informações no nivel de depuração no console

    try {
        await client.access({ // dados para acessar cliente/ftp
            host: "host",
            user: "user",
            password: "pass",
            port: 27,
            secure: true
        });
        console.log(await client.list()); //traz detalhamento da requisição
        await client.uploadFrom("teste.txt", "/MarcacaoPonto/teste.txt"); //envia arquivo ao cliente
    }

    catch(err) {
        console.log(err);
    }

    client.close(); //fecha instancia
}
