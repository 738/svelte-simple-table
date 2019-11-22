<script>
    import { _columns, _sortingColumn, _sortingColumnFlag, _sortingEnabled, _firstRowFixed } from "../stores/TableStore.js";
    import SortedBy from '../models/SortedBy.js';
    import classNames from '../utils/classNames.js';

    function setSortingColumn(column) {
        _sortingColumn.set(column);
        if ($_sortingColumn === column && $_sortingColumnFlag === SortedBy.ASC) {
            _sortingColumnFlag.set(SortedBy.DESC);
        } else if ($_sortingColumn === column && $_sortingColumnFlag === SortedBy.DESC) {
            _sortingColumnFlag.set(SortedBy.NONE);
        } else {
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
    th.sticky {
        position: sticky;
        box-shadow: inset 0 1px 0 gray,
                    inset 0 -1px 0 gray;
        top: 0px;
    }

    th.sorting-enabled {
        cursor: pointer;
    }

    th {
        background-color: #eeeeee;
    }

    th {
        height: 50px;
        min-width: 170px;
        border: 1px solid gray;
    }
</style>

<thead>
    <tr>
    {#each $_columns as column, index}
        <th class={classNames({
                'sticky': $_firstRowFixed,
                'sorting-enabled': $_sortingEnabled,
            })}
            key={index}
            on:click={() => {
            if (!$_sortingEnabled) return;
            setSortingColumn(column)
        }}>
            {column} {getSortingSpecialCharacter(column)}
        </th>
    {/each}
    </tr>
</thead>
