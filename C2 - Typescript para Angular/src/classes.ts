class character {
    name: string;
    streght: number;
    skill: number;

    constructor(name: string, streght: number, skill: number) {
        this.name = name
        this.streght = streght
        this.skill = skill

    }

    attack(): void {
        console.log(`Attack`);
    }
}