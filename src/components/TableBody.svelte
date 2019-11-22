<script>
    import { _columns, _rowData, _paginationEnabled, _paginationRow, _emptyValue, _filterEnabled, _filterMode, _filterInputText, _filterSelectedColumn, _filterNumberOption, _filterBooleanOption, _sortingColumn, _sortingColumnFlag, _currentPageNumber } from "../stores/TableStore.js";
    import SortedBy from '../models/SortedBy.js';
    import FilterMode, { FilterModeNumberOption, FilterModeBooleanOption } from '../models/FilterMode.js';

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

    $: filteredData = sortedData;
    $: if ($_filterEnabled) {
        switch($_filterMode) {
            case FilterMode.STRING:
                if ($_filterInputText !== "") {
                    filteredData = sortedData.filter(v=>{
                        if (v[$_filterSelectedColumn] === undefined) return false;
                        return v[$_filterSelectedColumn].toLowerCase().includes($_filterInputText.toLowerCase());
                    })
                } else {
                    filteredData = [...sortedData];
                }
                break;
            case FilterMode.NUMBER:
                if ($_filterInputText !== "") {
                    filteredData = sortedData.filter(v=>{
                        if (v[$_filterSelectedColumn] === undefined) return false;
                        if ($_filterNumberOption === FilterModeNumberOption.EQ) {
                            return +$_filterInputText === +v[$_filterSelectedColumn]
                        } else if ($_filterNumberOption === FilterModeNumberOption.LT) {
                            return +$_filterInputText > +v[$_filterSelectedColumn]
                        } else if ($_filterNumberOption === FilterModeNumberOption.GT) {
                            return +$_filterInputText < +v[$_filterSelectedColumn]
                        }
                    })
                } else {
                    filteredData = [...sortedData];
                }
                break;
            case FilterMode.BOOLEAN:

                break;
            default:
                break;
        }
    }

    let slicedData;
    $: if ($_paginationEnabled) {
        slicedData = filteredData.slice(($_currentPageNumber - 1)*$_paginationRow, $_currentPageNumber*$_paginationRow);
    } else {
        slicedData = filteredData;
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
