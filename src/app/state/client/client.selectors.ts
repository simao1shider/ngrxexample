import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ClientState } from "./client.reducer";

export const selectClients = (appState: AppState) => appState.clients;
export const selectAllClients = createSelector(
    selectClients,
    (clientState: ClientState) => clientState.clients
);