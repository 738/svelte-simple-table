<script>
    import { sortingColumn, sortingColumnFlag } from "../stores/TableStore.js";
    export let columns = [];
    export let rowData = [];
    export let tbodyHeight;
    export let emptyValue;

    // $: console.log(rowData)
    $: getSortedData = () => {
        let changedData = [...rowData];
        if ($sortingColumn !== null) {
            if ($sortingColumnFlag === 1) {
                changedData = rowData.slice().sort((a,b)=>{
                    if (!a[$sortingColumn]) return 1;
                    return (a[$sortingColumn]+'').localeCompare((b[$sortingColumn]+''));
                });
            } else if ($sortingColumnFlag === -1) {
                changedData = rowData.slice().sort((a,b)=>{
                    if (!b[$sortingColumn]) return 1;
                    return (b[$sortingColumn]+'').localeCompare((a[$sortingColumn]+''));
                })
            } else {
                changedData = rowData.slice();
            }
        }
        console.log(changedData.map(v=>v[$sortingColumn]))
        return changedData;
    }

    $: sortedData = getSortedData()
</script>

<style>
td {
    border: 1px solid black;
    width: 200px;
}

tbody {
  display: block;
  overflow: auto;
}

</style>

<tbody style={`height: ${tbodyHeight}px`}>
    {#each sortedData as item, itemIndex}
        <tr>
            {#each columns as d (d['nccCampaignId'])}
            <td>{item[d] || emptyValue}</td>
            {/each}
        </tr>
    {/each}
</tbody>