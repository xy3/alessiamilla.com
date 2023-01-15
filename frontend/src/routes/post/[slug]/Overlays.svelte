<script lang="ts">
    import {PUBLIC_API_URL} from "$env/static/public";

    export let overlays;
</script>

<div class="overlays-container">
    <div class="overlays">
        {#each overlays as overlay}
            <img src={PUBLIC_API_URL + overlay.attributes.url} alt="">
        {/each}
    </div>
</div>

<style>
    .overlays-container {
        position: absolute;
        width: 100%;
        overflow: hidden;
        height: 100%;
        top: 0;
    }

    .overlays {
        z-index: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .overlays img {
        display: block;
        flex: 1;
    }
</style>