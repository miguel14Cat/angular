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
    characters = signal<character[]>([
        {id: 1, name:'Goku', power: 9001},
        {id: 2, name:'Vegeta', power: 8000},
        {id: 3, name:'Piccolo', power: 3000},
    ]);

   // powerClasses = computed(() => {
   //     return{
   //         'text-danger':true,
   //     } 
   //}) 
}
