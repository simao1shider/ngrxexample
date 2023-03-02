import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Client } from 'src/app/models/client';
import { AppState } from 'src/app/state/app.state';
import { addClient } from 'src/app/state/client/client.action';

@Component({
    selector: 'app-client-form',
    templateUrl: './client-form.component.html'
})
export class ClientFormComponent implements OnInit {
    profileForm = new FormGroup({
        firstName: new FormControl<string>('', Validators.required),
        lastName: new FormControl<string>(''),
    });
    lista = [];
    constructor(private _store: Store<AppState>) { }

    ngOnInit(): void { }

    onSubmit(){
        let client: Client = new Client(this.profileForm.controls.firstName.value || '', this.profileForm.controls.lastName.value || '');
        this._store.dispatch(addClient({ client: client}));
    }
}
