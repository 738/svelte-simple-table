<script>
    import { _currentPageNumber, _paginationRow, _rowData } from '../stores/TableStore.js';

    let totalPageNumber = Math.ceil($_rowData.length / $_paginationRow);
    let pages = Array.from(Array(totalPageNumber), (_, i) => (i+1));
</script>

<div id="pagination-container">
    <button on:click={() => { _currentPageNumber.update(n=>n-1) }} disabled={$_currentPageNumber === 1}>{'<'}</button>
    <div id="pagination-number-container">
        {#each pages as page, index}
            {#if page === $_currentPageNumber}
                <div style="color: red">{page}</div>
            {:else}
                <div on:click={() => { _currentPageNumber.set(page) }} style="cursor: pointer;">{page}</div>
            {/if}
        {/each}
    </div>
    <button on:click={() =>{ _currentPageNumber.update(n=>n+1) }} disabled={$_currentPageNumber === totalPageNumber}>{'>'}</button>
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
