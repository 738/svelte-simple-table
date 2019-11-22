<script>
    import { _columns, _rowData, _paginationEnabled, _paginationRow, _emptyValue, _sortingColumn, _sortingColumnFlag, _currentPageNumber } from "../stores/TableStore.js";
    import SortedBy from '../models/SortedBy.js';

    $: getSortedData = () => {
        let changedData = [...$_rowData];
        if ($_sortingColumn !== null) {
            if ($_sortingColumnFlag === SortedBy.ASC) {
                changedData = $_rowData.slice().sort((a,b)=>{
                    if (!a[$_sortingColumn]) return 1;
                    return (a[$_sortingColumn]+'').localeCompare((b[$_sortingColumn]+''));
                });
            } else if ($_sortingColumnFlag === SortedBy.DESC) {
                changedData = $_rowData.slice().sort((a,b)=>{
                    if (!b[$_sortingColumn]) return 1;
                    return (b[$_sortingColumn]+'').localeCompare((a[$_sortingColumn]+''));
                })
            }
        }
        return changedData
    }
    $: resultData = getSortedData()
    $: if ($_paginationEnabled) resultData = resultData.slice(($_currentPageNumber - 1)*$_paginationRow, $_currentPageNumber*$_paginationRow)
</script>

<style>
td {
    border: 1px solid black;
    min-width: 200px;
}

tbody {
  /* display: block; */
  /* overflow: auto; */
}

</style>

<tbody>
    {#each resultData as item, itemIndex}
        <tr key={itemIndex}>
            {#each $_columns as column}
            <td>{item[column] || $_emptyValue}</td>
            {/each}
        </tr>
    {/each}
</tbody>
