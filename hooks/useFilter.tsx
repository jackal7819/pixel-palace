import create from 'zustand';

type Store = {
  filters: string[],
  setFilters: (newFilters: string[]) => void;
}

export const useFilterStore = create<Store>((set) => ({
  filters: [],
  setFilters: (newFilters: string[]) => set({ filters: newFilters })
}));