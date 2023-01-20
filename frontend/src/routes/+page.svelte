<script lang="ts">
    import PostImage from "./PostImage.svelte";
    import Alessia from "./Alessia.svelte";

    export let data;
</script>

<svelte:head>
    <title>Alessia Milla | Creative Director</title>
</svelte:head>

<section>
    <div class="header">
        <Alessia/>
    </div>
    {#if data.data.data}
        {#each data.data.data as post}
            <PostImage
                    slug={post.attributes.Slug}
                    title={post.attributes.Title}
                    image={post.attributes.HeaderImage.data?.attributes.url}
                    color={post.attributes.Color || "#000000"}
            />
        {/each}
    {/if}
</section>

<style>
</style>
