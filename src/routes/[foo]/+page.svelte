<script>
    export let data;
    $: console.log(data);
</script>

{JSON.stringify(data.metadata, null, 2)}
