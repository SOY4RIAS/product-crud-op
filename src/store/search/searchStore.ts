import { create } from 'zustand';

import { SearchActions, SearchState } from '@/store/search/types';

export type SearchStore = SearchState & SearchActions;

const defaultState: SearchState = {
  search: null,
};

export const createSearchStore = (initialState: SearchState = defaultState) => {
  return create<SearchStore>((set) => ({
    ...initialState,
    setSearch: (search) => {
      set({ search });
    },
    clearSearch: () => {
      set({ search: null });
    },
  }));
};
