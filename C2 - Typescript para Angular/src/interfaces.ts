// ojeto sem tipagem imprevisivel
let produto: object = {
    nome: "jadley",
    cidade: "recife",
    idade: 24
}

// objeto tipado, previsivel
type produtoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: produtoLoja = {
    nome: "tenis",
    preco: 500.43,
    unidades: 34
}


//vetor

let nome: string[] = ['jadley', 'felipe']
let nome2: Array<string> = ['teste']

//Array heterogeneo
let array: (string | number)[] = [1, 2, "teste", 3]

//tuplas
let tupla: [number, string, number] = [1, "testes", 3]

//data
let aniversario: Date = new Date("04-09-1999 20:45")
console.log(aniversario.toString())

//funcoes

function numeros(x: number, y: number): number {
    return x + y
}

function callToPhone(phone: number | string) {
    return phone
}

//async

async function getDatabase(id: number): Promise<number | string> {
    return "jadley"
}

// interfaces (type x inteface)

interface robot {
    id: number,
    name: string
}

const mega: robot = {
    id: 5, 
    name: "doido"
}