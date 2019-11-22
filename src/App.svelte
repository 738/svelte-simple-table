<script>
	import Table from './components/Table.svelte';

	async function getData() {
		let responseOfColumns = await fetch('http://106.10.34.16:4188/columns');
		let columns = await responseOfColumns.json();
		let responseOfEntities = await fetch('http://106.10.34.16:4188/entities');
		let entities = await responseOfEntities.json();
		return {columns, entities};
	}

	let promise = getData();
</script>

<main>
	{#await promise}
	<p>waiting...</p>
	{:then data}
	<Table
		columns={data.columns}
		rowData={data.entities}
		sortingEnabled={true}
		filterEnabled={true}
		paginationEnabled={true}
		paginationRow={25}
		firstRowFixed={false}
		emptyValue='빈 값입니다.'
	/>
	{:catch error}
	<p style="color: red">{error}</p>
	{/await}
</main>

<style>

</style>