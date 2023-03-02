import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    getClients() {
        return of([]);
    }

    addClient(client: Client) {
        return of([]);
    }
}