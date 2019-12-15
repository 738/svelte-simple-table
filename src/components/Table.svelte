<script>
  import TableHead from "./TableHead.svelte";
  import TableBody from "./TableBody.svelte";
  import TablePagination from "./TablePagination.svelte";
  import TableFilter from './TableFilter.svelte';
  import {
    _columns,
    _rowData,
    _sortingEnabled,
    _filterEnabled,
    _paginationEnabled,
    _paginationRow,
    _firstRowFixed,
    _columnFixed,
    _fixedColumn,
    _emptyValue,
    _sortingColumn,
    _sortingColumnFlag,
    _currentPageNumber,
  } from "../stores/TableStore.js";
  
  export let columns = [];
  export let rowData = [];
  export let sortingEnabled = true;
  export let filterEnabled = true;
  export let paginationEnabled = true;
  export let paginationRow = 10;
  export let firstRowFixed = true;
  export let columnFixed = false;
  export let fixedColumn = 1;
  export let emptyValue = '';

  // store properties into TableStore
  _columns.set(columns);
  _rowData.set(rowData);
  _sortingEnabled.set(sortingEnabled);
  _filterEnabled.set(filterEnabled);
  _paginationEnabled.set(paginationEnabled);
  _paginationRow.set(paginationRow);
  _firstRowFixed.set(firstRowFixed);
  _columnFixed.set(columnFixed);
  _fixedColumn.set(fixedColumn);
  _emptyValue.set(emptyValue);
</script>

{#if $_filterEnabled}
  <TableFilter />
{/if}
<div class="table-wrap">
    <table>
      <TableHead />
      <TableBody />
    </table>
</div>
{#if $_paginationEnabled}
  <TablePagination />
{/if}

<style>
  .table-wrap {
    display: block;
    position: relative;
    max-width: 100vw;
    
    /* 100view height - paginator height */
    max-height: calc(100vh - 95px);
    overflow-x: auto;
  }

  .table-wrap table {
    width: 100%;
    border-collapse: collapse;
  }
  
</style>