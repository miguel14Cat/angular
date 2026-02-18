import { Component } from '@angular/core';

@Component({
    template:`
    <h1>Counter: {{ counter}} </h1>
   <button (click) ="incremento(1)">+1</button>
    `
})


export class CounterPage {

    counter = 20;
    incremento(value: number) {
        this.counter += value;
    }

}