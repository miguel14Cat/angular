import { Component } from '@angular/core';

@Component({
   templateUrl: './counter-page.html',
   styles:`
    button {
        padding: 5px;
        margin: 5px 10px;
        width: 75px;
    }
   `
})


export class CounterPage {

    counter = 10;
    incremento(value: number) {
        this.counter += value;
    }

    resetContador(){
        this.counter = 10;
    }

}