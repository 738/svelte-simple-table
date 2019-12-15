<script>
	import Table from './components/Table.svelte';

	let columns = ['id', 'first_name', 'last_name', 'gender', 'test', 'test2'];
	let rowData = [
		{ id: 1, first_name: "Marilyn", last_name: "Monroe", gender: "female", test: true, test2: 3 },
		{ id: 2, first_name: "Abraham", last_name: "Lincoln", gender: "male", test: true, test2: 3 },
		{ id: 3, first_name: "Mother", last_name: "Teresa", gender: "female", test: true, test2: 3 },
		{ id: 4, first_name: "John F.", last_name: "Kennedy", gender: "male", test: true, test2: 3 },
		{ id: 5, first_name: "Martin Luther", last_name: "King", gender: "male", test: true, test2: 3 },
		{ id: 6, first_name: "Nelson", last_name: "Mandela", gender: "male", test: true, test2: 3 },
		{ id: 7, first_name: "Winston", last_name: "Churchill", gender: "male", test: true, test2: 3 },
		{ id: 8, first_name: "Donald", last_name: "Trump", gender: "male", test: true, test2: 3 },
		{ id: 9, first_name: "Bill", last_name: "Gates", gender: "male", test: true, test2: 3 },
		{ id: 10, first_name: "Muhammad", last_name: "Ali", gender: "male", test: true, test2: 3 },
		{ id: 11, first_name: "Mahatma", last_name: "Gandhi", gender: "male", test: false },
		{ id: 12, first_name: "Margaret", last_name: "Thatcher", gender: "female", test: false },
		{ id: 13, first_name: "Christopher", last_name: "Columbus", gender: "male", test: false },
		{ id: 14, first_name: "Charles", last_name: "Darwin", gender: "male", test: false },
		{ id: 15, first_name: "Elvis", last_name: "Presley", gender: "male", test: false },
		{ id: 16, first_name: "Albert", last_name: "Einstein", gender: "male", test: false},
		{ id: 17, first_name: "Paul", last_name: "McCartney", gender: "male", test: false },
		{ id: 18, first_name: "Queen", last_name: "Victoria", gender: "female", test: true },
		{ id: 19, first_name: "Pope", last_name: "Francis", gender: "male", test: true }
	];
</script>

<main>
	<Table
		columns={columns}
		rowData={rowData}
		sortingEnabled={true}
		filterEnabled={true}
		paginationEnabled={false}
		paginationRow={10}
		firstRowFixed={true}
		emptyValue='빈 값입니다.'
	/>
</main>

<style>

</style>