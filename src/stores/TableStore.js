import { writable } from 'svelte/store';

// properties
export const _columns = writable([]);
export const _rowData = writable([]);
export const _sortingEnabled = writable(true);
export const _filterEnabled = writable(true);
export const _paginationEnabled = writable(true);
export const _paginationRow = writable(10);
export const _firstRowFixed = writable(true);
export const _columnFixed = writable(false);
export const _fixedColumn = writable(1);
export const _emptyValue = writable('');

// extra variables
export const _sortingColumn = writable(null);
export const _sortingColumnFlag = writable(0);
export const _currentPageNumber = writable(1);
