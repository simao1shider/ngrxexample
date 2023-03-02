import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-client',
    template: `
    <div class="row">
        <div class="col">
            <app-client-list></app-client-list>
        </div>
        <div class="col">
            <app-client-form></app-client-form>
        </div>
    </div>`
})
export class ClientComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
