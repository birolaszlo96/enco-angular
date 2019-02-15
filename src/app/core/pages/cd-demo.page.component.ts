import { Component } from '@angular/core';

@Component({
    templateUrl: './cd-demo.page.component.html',
})
export class CdDemoPageComponent {

    demoModel = {
        prop1: 3,
        prop2: 5
    };

    setModel() {
        this.demoModel.prop1 = Math.random();
        // this.demoModel = { ...this.demoModel, prop1: Math.random() };
    }
}
