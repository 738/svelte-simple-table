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
    $: sortedData = getSortedData()

    let slicedData;
    $: if ($_paginationEnabled) {
        slicedData = sortedData.slice(($_currentPageNumber - 1)*$_paginationRow, $_currentPageNumber*$_paginationRow);
    } else {
        slicedData = sortedData;
    }

</script>

<style>
/* td {
    border: 1px solid black;
    min-width: 200px;
} */

tbody {
  /* display: block; */
  /* overflow: auto; */
}

tr:active td {
    background-color: wheat;
}

tr:hover {
    cursor: pointer;
}

tr:hover td {
    background-color: antiquewhite;
}

tr:first-child td {
    /* position: sticky;
    box-shadow: inset 0 1px 0 gray,
                inset 0 -1px 0 gray;
    top: 0px; */
}

td {
    height: 50px;
    min-width: 170px;
    border: 1px solid gray;
}

</style>

<tbody>
    {#each slicedData as item, itemIndex}
        <tr key={itemIndex}>
            {#each $_columns as column}
            <td>{item[column] || $_emptyValue}</td>
            {/each}
        </tr>
    {/each}
</tbody>
