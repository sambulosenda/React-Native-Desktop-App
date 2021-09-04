// src/Store.ts
import { createContext, useContext } from "react"
import { createUIStore } from "./stores/UI.store"
import { createApiStore } from "stores/Api.store"

export interface IRootStore {
  ui: ReturnType<typeof createUIStore>
  api: ReturnType<typeof createApiStore>
}

let createRootStore = (): IRootStore => {
  let store: any = {}
    
  store.ui = createUIStore(store)
  store.api = createApiStore(store)
  return store
}

export let root = createRootStore()

export let StoreContext = createContext<IRootStore>(root)
export let StoreProvider = StoreContext.Provider
export let useStore = () => useContext(StoreContext)