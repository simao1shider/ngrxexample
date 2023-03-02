import { createAction, props } from "@ngrx/store";
import { Client } from "src/app/models/client";

export const addClient = createAction(
    '[Client Page] Add Client',
    props<{ client: Client }>()
);

export const loadClients = createAction('[Client Page] Load Clients');
