<script>
    import { sortingColumn, sortingColumnFlag } from "../stores/TableStore.js";

    export let columns = [];
    // export let sortingEnabled = true;

    function setSortingColumn(column) {
        if ($sortingColumn === column && $sortingColumnFlag === 1) {
            sortingColumnFlag.set(-1);
        } else if ($sortingColumn === column && $sortingColumnFlag === -1) {
            sortingColumnFlag.set(0);
        } else {
            sortingColumn.set(column);
            sortingColumnFlag.set(1);
        }
    }

    $: getSortingSpecialCharacter = (column) => {
        if ($sortingColumn === column && $sortingColumnFlag === 1) {
            return '↓';
        } else if ($sortingColumn === column && $sortingColumnFlag === -1) {
            return '↑';
        }
        return '';
    }
</script>

<style>
    th {
		border: 1px solid black;
        width: 200px;
	}
    thead tr {
        display: block;
    }
</style>

<thead>
    <tr>
    {#each columns as column, index}
        <th key={index} on:click={()=>{
            setSortingColumn(column)
        }}>{column} {getSortingSpecialCharacter(column)}</th>
    {/each}
    </tr>
</thead>