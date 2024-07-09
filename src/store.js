import { create } from 'zustand'

const useStore = create((set) => ({
  totalPrice: 0,
  setTotalPrice: (newTotal) => set({ totalPrice: newTotal }),
  itemsCount: 0,
  setItemsCount: count => set({ itemsCount: count })
}))

export default useStore;