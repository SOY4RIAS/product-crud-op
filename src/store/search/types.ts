export interface SearchState {
  search: string | null;
}

export interface SearchActions {
  setSearch: (search: string) => void;
  clearSearch: () => void;
}
