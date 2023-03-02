import { createReducer, on } from "@ngrx/store";
import { Client } from "src/app/models/client";
import { addClient, loadClients } from "./client.action";

export interface ClientState {
    clients: Client[];
}

export const initialState: ClientState = {
    clients: []
};

export const clientReducer = createReducer(
    initialState,
    on(addClient, (state, { client }) => {
        return {
            ...state,
            clients: [...state.clients, client]
        };
    }),
    on(loadClients, (state) => ({ ...state }))
);