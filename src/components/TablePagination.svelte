<script>
    import { currentPageNumber } from '../stores/TableStore.js';
    export let paginationRow;
    export let rowData;

    let totalPageNumber = Math.ceil(rowData.length / paginationRow);
    let pages = Array.from(Array(totalPageNumber), (_, i) => (i+1));
</script>

<div id="pagination-container">
    <button on:click={() => { currentPageNumber.update(n=>n-1) }} disabled={$currentPageNumber === 1}>{'<'}</button>
    <div id="pagination-number-container">
        {#each pages as page, index}
            {#if page === $currentPageNumber}
                <div style="color: red">{page}</div>
            {:else}
                <div on:click={() => { currentPageNumber.set(page) }} style="cursor: pointer;">{page}</div>
            {/if}
        {/each}
    </div>
    <button on:click={() =>{ currentPageNumber.update(n=>n+1) }} disabled={$currentPageNumber === totalPageNumber}>{'>'}</button>
</div>

<style>
    div#pagination-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    div #pagination-number-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>
