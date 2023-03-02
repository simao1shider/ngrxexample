import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { switchMap, from, map, catchError, of, exhaustMap } from "rxjs";
import { Client } from "../../models/client";
import { ClientService } from "src/app/services/client.service";
import { AppState } from "../app.state";
import { addClient, loadClients } from "./client.action";

@Injectable()
export class ClientEffects {
    constructor(
        private _actions$: Actions,
        private _store: Store<AppState>,
        private _clientService: ClientService
    ) { }

    loadClients$ = createEffect(() =>
        this._actions$.pipe(
            ofType(loadClients),
            switchMap(() =>
                from(this._clientService.getClients()).pipe(
                    map((clients: Client[]) => console.info(clients)),
                    catchError((error) => of(error))
                )
            )
        )
    );

    addClient$ = createEffect(() =>
        this._actions$.pipe(
            ofType(addClient),
            exhaustMap(action =>
                this._clientService.addClient(action.client).pipe(
                    map(res => console.info(res)),
                    catchError((error: any) => of(error))
                )
            )
        )
    );
}

