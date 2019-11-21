<script>
    export let columns = [];
    export let rowData = [];
</script>

<style>
td {
    border: 1px solid black;
}
</style>

{#each rowData as item, itemIndex}
    <tr>
        {#each columns as d (d['nccCampaignId'])}
        <td>{item[d] || ""}</td>
        {/each}
    </tr>
{/each}