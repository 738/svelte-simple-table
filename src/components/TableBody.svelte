<script>
    import { _columns, _rowData, _paginationEnabled, _paginationRow, _emptyValue, _sortingColumn, _sortingColumnFlag, _currentPageNumber } from "../stores/TableStore.js";
    import SortedBy from '../models/SortedBy.js';

    $: getSortedData = () => {
        let changedData = [...$_rowData];
        if ($_sortingColumn !== null) {
            if ($_sortingColumnFlag === SortedBy.ASC) {
                changedData = $_rowData.slice().sort((a,b)=>{
                    if (typeof(a[$_sortingColumn]) === 'number' && typeof(b[$_sortingColumn]) === 'number'
                     || typeof(a[$_sortingColumn]) === 'boolean' && typeof(b[$_sortingColumn]) === 'boolean') return a[$_sortingColumn] - b[$_sortingColumn];
                    return (a[$_sortingColumn]+'').localeCompare((b[$_sortingColumn]+''));
                });
            } else if ($_sortingColumnFlag === SortedBy.DESC) {
                changedData = $_rowData.slice().sort((a,b)=>{
                    if (typeof(a[$_sortingColumn]) === 'number' && typeof(b[$_sortingColumn]) === 'number'
                     || typeof(a[$_sortingColumn]) === 'boolean' && typeof(b[$_sortingColumn]) === 'boolean') return b[$_sortingColumn] - a[$_sortingColumn];
                    return (b[$_sortingColumn]+'').localeCompare((a[$_sortingColumn]+''));
                })
            }
        }
        return changedData;
    }
    $: sortedData = getSortedData();

    let slicedData;
    $: if ($_paginationEnabled) {
        slicedData = sortedData.slice(($_currentPageNumber - 1)*$_paginationRow, $_currentPageNumber*$_paginationRow);
    } else {
        slicedData = sortedData;
    }

</script>

<style>
tr:active td {
    background-color: wheat;
}

tr:hover {
    cursor: pointer;
}

tr:hover td {
    background-color: antiquewhite;
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
            <td>{item[column] !== undefined ? item[column] : $_emptyValue}</td>
            {/each}
        </tr>
    {/each}
</tbody>
