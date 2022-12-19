export function exemploTipos() {
    const numero:number = 5;
    const nome:string = "Denilson";
    const ehumano:boolean = true;


    console.log("O numero é " + numero);
    console.log("O nome é " + nome);
    console.log("Ele é humano " + ehumano);
}

export function exemploIfLoop() {
    let contador = 1;
    while (contador <= 5) {
        let nome = "Marcelo";
        
        if (contador === 2 || nome === "marcelo") {
            console.log("nome " + nome + " e o contador " + contador);
        } else{
            console.log("não chegou");
        }
        
        console.log("Contador " + contador);
        contador++;

    }
}