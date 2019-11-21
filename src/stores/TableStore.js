import { writable } from 'svelte/store';

// export const columns = writable([]);
// export const rowData = writable([]);
export const sortingColumn = writable(null);
export const sortingColumnFlag = writable(0);