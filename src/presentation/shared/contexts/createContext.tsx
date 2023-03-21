import {
  createContext as createContextPrimitive,
  PropsWithChildren,
  useCallback,
  useContext,
  useSyncExternalStore,
  useRef,
  ComponentType,
} from 'react'

type Listener = () => void

export function createContext<Store>(inicialState: Store) {
  function useStoreData(): {
    get: () => Store
    set: (newStore: Partial<Store>) => void
    subscribe: (listener: Listener) => () => void
  } {
    const listeners = useRef(new Set<Listener>())
    const store = useRef(inicialState)

    const get = useCallback(() => store.current, [])

    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store.current, ...value }

      listeners.current.forEach((listener) => listener())
    }, [])

    const subscribe = useCallback((listener: Listener) => {
      listeners.current.add(listener)

      return () => {
        listeners.current.delete(listener)
      }
    }, [])

    return {
      get,
      set,
      subscribe,
    }
  }

  type UseStoreData = ReturnType<typeof useStoreData>

  const StoreContext = createContextPrimitive<UseStoreData | null>(null)

  function StoreProvider({ children }: PropsWithChildren) {
    const store = useStoreData()

    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
  }

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput,
  ): [SelectorOutput, (store: Partial<Store>) => void] {
    const context = useContext(StoreContext)

    if (!context)
      throw new Error('useStore must be used within a StoreProvider.')

    const store = useSyncExternalStore(
      context.subscribe,
      () => selector(context.get()),
      () => null,
    ) as SelectorOutput

    return [store, context.set]
  }

  type Return = [
    ComponentType<PropsWithChildren>,
    <SelectorOutput>(
      selector: (store: Store) => SelectorOutput,
    ) => [SelectorOutput, (store: Partial<Store>) => void],
  ]

  return [StoreProvider, useStore] as Return
}
