# svelte-simple-table

## How to install

```bash
npm install svelte-simple-table
```

## Example

```html
<script>
  import SimpleTable from 'svelte-simple-table';
</script>

<style>
  
</style>

<SimpleTable column={['A','B']} rowData={[{'A': 'a1', 'B': 'b1'}, {'A': 'a2', 'B': 'b2'}]}/>

```

## Properties

| Prop    | Default | Type  | Required | Description |
|---------|---------|-------|----------|-------------|
| columns | []      | `Array` | Y |             |
| rowData | []      | `Array` | Y |           |
| sortingEnabled | true | `Boolean` | N |          |
| paginationEnabled | true | `Boolean` | N |          |
| paginationRow | 10 | `Number` | N |          |
| firstRowFixed | true | `Boolean` | N |         |
| tbodyHeight | 500 | `Number` | N | `px`     |
| columnFixed | false | `Boolean` | N |         |
| fixedColumn | 1 | `Number` | N |          |
| emptyValue | '' | `Any` | N |          |


## Methods
| Prop    | Params | Description  | 
|---------|---------|-------|
| downloadCSV | - |  |
