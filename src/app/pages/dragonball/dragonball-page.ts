import {Component, computed, signal} from '@angular/core'
//import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

interface character {
    id: number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragonball-page.html',
    //imports: [NgClass],
})
export class DragonballPage{

    name = signal('Gohan');
    power = signal(100);

    characters = signal<character[]>([
        {id: 1, name:'Goku', power: 9001},
        {id: 2, name:'Vegeta', power: 8000},
        {id: 3, name:'Piccolo', power: 3000},
        {id: 4, name:'Yamcha', power: 500},
    ]);

    addCharacter() {
        if (this.name() || this.power() || this.power() <= 0){
            return;
        }
        const newCharacter : character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power(),
        };
        this.characters().push(newCharacter);
    }

   // powerClasses = computed(() => {
   //     return{
   //         'text-danger':true,
   //     } 
   //}) 
}
