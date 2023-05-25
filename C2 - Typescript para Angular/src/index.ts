//Atribute Decorators
function minLenght(lenght: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < lenght){
                throw new Error(`Tamanho menor que ${lenght}`)
            } else {
                _value = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    }
}

class Api{
    @minLenght(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("products")
console.log(api.name)


