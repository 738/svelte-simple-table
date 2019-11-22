<script>
    import { _columns, _filterSelectedColumn, _filterMode, _rowData, _filterInputText, _filterNumberOption, _filterBooleanOption } from "../stores/TableStore.js";
    import FilterMode, { FilterModeBooleanOption, FilterModeNumberOption } from '../models/FilterMode.js';
    let selected, selected2;
    if ($_columns.length) _filterSelectedColumn.set($_columns[0]);

    $: if ($_rowData.map(v=>v[$_filterSelectedColumn]).some(v=>typeof(v)==="string")) {
        _filterMode.set(FilterMode.STRING);
    } else if ($_rowData.map(v=>v[$_filterSelectedColumn]).some(v=>typeof(v)==="number")) {
        _filterMode.set(FilterMode.NUMBER);
    } else if ($_rowData.map(v=>v[$_filterSelectedColumn]).some(v=>typeof(v)==="boolean")) {
        _filterMode.set(FilterMode.BOOLEAN);
    } else {
        _filterMode.set(FilterMode.NONE);
    }
</script>

<select bind:value={$_filterSelectedColumn} on:change={() => {}}>
  {#each $_columns as column}
    <option value={column}>{column}</option>
  {/each}
</select>

{#if $_filterMode === FilterMode.NUMBER}
<select bind:value={$_filterNumberOption}>
    <option value={FilterModeNumberOption.EQ}>{FilterModeNumberOption.EQ}</option>
    <option value={FilterModeNumberOption.LT}>{FilterModeNumberOption.LT}</option>
    <option value={FilterModeNumberOption.GT}>{FilterModeNumberOption.GT}</option>
</select>
<input type="text" />
{:else if $_filterMode === FilterMode.STRING}
<input type="text" bind:value={$_filterInputText} />
{:else if $_filterMode === FilterMode.BOOLEAN}
<select bind:value={$_filterBooleanOption}>
    <option value={FilterModeBooleanOption.TRUE}>{FilterModeBooleanOption.TRUE}</option>
    <option value={FilterModeBooleanOption.FALSE}>{FilterModeBooleanOption.FALSE}</option>
</select>
{/if}

<button on:click={() => {}}>reset</button>