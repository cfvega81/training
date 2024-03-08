// Principio de estado
import { Boss } from "./boss";

export class Boss_Goblin extends Boss {
    constructor() {
        super(100, "King Goblin");
    }

    dataBoss(): void {
        this.appearsBoss();
        const hp = this.getHp();
        const className = this.getClassName();

        console.log("Name:", className);
        console.log("Boss HP:", hp);
    }
}
