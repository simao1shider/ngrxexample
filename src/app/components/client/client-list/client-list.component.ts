import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectAllClients } from 'src/app/state/client/client.selectors';

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {
    clients$ = this._store.select(selectAllClients);
    
    constructor(private _store: Store<AppState>) { }

    ngOnInit(): void { 
        this.clients$.subscribe(s => console.log(s));
    }
}
