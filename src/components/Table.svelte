<script>
  import TableHead from "./TableHead.svelte";
  import TableBody from "./TableBody.svelte";
  import TablePagination from "./TablePagination.svelte";
  
  export let columns = [];
  export let rowData = [];
  export let tbodyHeight = 500;
//   export let sortingEnabled = true;
//   export let paginationEnabled = true;
  export let paginationRow = 10;
//   export let firstRowFixed = true;
//   export let columnFixed = false;
//   export let fixedColumn = 1;
  export let emptyValue = '';
</script>

<table>
  <TableHead columns={columns} />
  <TableBody
    columns={columns}
    rowData={rowData}
    tbodyHeight={tbodyHeight}
    emptyValue={emptyValue}
    paginationRow={paginationRow}/>
  <TablePagination
    paginationRow={paginationRow}
    rowData={rowData} />
</table>

<style>
	table {
		border-collapse: collapse;
	}

	table {
		border: 1px solid black;
	}
</style>