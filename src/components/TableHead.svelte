<script>
    import { _columns, _sortingColumn, _sortingColumnFlag, _sortingEnabled } from "../stores/TableStore.js";
    import SortedBy from '../models/SortedBy.js';

    function set_SortingColumn(column) {
        if ($_sortingColumn === column && $_sortingColumnFlag === SortedBy.ASC) {
            _sortingColumnFlag.set(SortedBy.DESC);
        } else if ($_sortingColumn === column && $_sortingColumnFlag === SortedBy.DESC) {
            _sortingColumnFlag.set(SortedBy.NONE);
        } else {
            _sortingColumn.set(column);
            _sortingColumnFlag.set(SortedBy.ASC);
        }
    }

    $: getSortingSpecialCharacter = (column) => {
        if ($_sortingColumn === column && $_sortingColumnFlag === SortedBy.ASC) {
            return '↓';
        } else if ($_sortingColumn === column && $_sortingColumnFlag === SortedBy.DESC) {
            return '↑';
        }
        return '';
    }
</script>

<style>
    th {
		border: 1px solid black;
        min-width: 200px;
        
	}
    thead tr {
        /* display: block; */
        position: sticky;
        top: 0;
    }
</style>

<thead>
    <tr>
    {#each $_columns as column, index}
        <th style={$_sortingEnabled && "cursor: pointer;"} key={index} on:click={() => {
            if (!$_sortingEnabled) return;
            set_SortingColumn(column)
        }}>{column} {getSortingSpecialCharacter(column)}</th>
    {/each}
    </tr>
</thead>
