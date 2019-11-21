<script>
    import { beforeUpdate, afterUpdate } from 'svelte';

    export let columns = [];
    export let sortingEnabled = true;

    let sortingColumn;
    let sortingColumnFlag;  // 1: 오름차순, -1: 내림차순, 0: 정렬 X

    function setSortingColumn(column) {
        if (sortingColumn === column && sortingColumnFlag === 1) {
            sortingColumnFlag = -1;
        } else if (sortingColumn === column && sortingColumnFlag === -1) {
            sortingColumnFlag = 0;
        } else {
            sortingColumn = column;
            sortingColumnFlag = 1;
        }
    }
    //↓ ↑
    $: getSortingSpecialCharacter = (column) => {
        if (sortingColumn === column && sortingColumnFlag === 1) {
            return '↓';
        } else if (sortingColumn === column && sortingColumnFlag === -1) {
            return '↑';
        }
        return '';
    }

    afterUpdate(() => {
        console.log(sortingColumn)
    });
</script>

<style>
    th {
		border: 1px solid black;
	}
</style>

<tr>
{#each columns as column, index}
    <th key={index} on:click={()=>{
        setSortingColumn(column)
    }}>{column} {getSortingSpecialCharacter(column)}</th>
{/each}
</tr>