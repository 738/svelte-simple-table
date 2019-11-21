<script>
    import { sortingColumn, sortingColumnFlag, currentPageNumber } from "../stores/TableStore.js";
    export let columns = [];
    export let rowData = [];
    export let tbodyHeight;
    export let emptyValue;
    export let paginationRow;
    
    $: getSortedData = () => {
        let changedData = [...rowData];
        if ($sortingColumn !== null) {
            if ($sortingColumnFlag === 1) {
                changedData = rowData.slice().sort((a,b)=>{
                    if (!a[$sortingColumn]) return 1;
                    return (a[$sortingColumn]+'').localeCompare((b[$sortingColumn]+''));
                });
            } else if ($sortingColumnFlag === -1) {
                changedData = rowData.slice().sort((a,b)=>{
                    if (!b[$sortingColumn]) return 1;
                    return (b[$sortingColumn]+'').localeCompare((a[$sortingColumn]+''));
                })
            } else {
                changedData = rowData.slice();
            }
        }
        return changedData
    }
    $: sortedData = getSortedData()
    $: slicedData = sortedData.slice(($currentPageNumber - 1)*paginationRow, $currentPageNumber*paginationRow)
</script>

<style>
td {
    border: 1px solid black;
    min-width: 200px;
}

tbody {
  display: block;
  overflow: auto;
}

</style>

<tbody style={`height: ${tbodyHeight}px`}>
    {#each slicedData as item, itemIndex}
        <tr key={itemIndex}>
            {#each columns as column}
            <td>{item[column] || emptyValue}</td>
            {/each}
        </tr>
    {/each}
</tbody>
