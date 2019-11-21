<script>
  import TableHead from "./TableHead.svelte";
  import TableBody from "./TableBody.svelte";
  export let columns = [];
  export let rowData = [];
//   export let sortingEnabled = true;
//   export let paginationEnabled = true;
//   export let paginationRow = 10;
//   export let firstRowFixed = true;
//   export let columnFixed = false;
//   export let fixedColumn = 1;
//   export let emptyValue = '';
</script>

<table>
  <TableHead columns={columns} />
  <TableBody columns={columns} rowData={rowData} />
</table>

<style>
	table {
		border-collapse: collapse;
	}

	table {
		border: 1px solid black;
	}
</style>