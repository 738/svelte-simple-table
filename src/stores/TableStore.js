import { writable } from 'svelte/store';
import SortedBy from '../models/SortedBy';
import FilterMode, { FilterModeBooleanOption, FilterModeNumberOption } from '../models/FilterMode';

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
export const _sortingColumnFlag = writable(SortedBy.NONE);
export const _currentPageNumber = writable(1);
export const _filterSelectedColumn = writable(null);
export const _filterMode = writable(FilterMode.NONE);
export const _filterInputText = writable('');
export const _filterNumberOption = writable(FilterModeNumberOption.EQ);
export const _filterBooleanOption = writable(FilterModeBooleanOption.TRUE);