<script>
    import PostImage from "./PostImage.svelte";
    import Alessia from "./Alessia.svelte";
    import {afterUpdate} from "svelte";

    export let data;

    // afterUpdate(async () => {
    //     await document.querySelectorAll("video").forEach(v => {
    //         const source = v.querySelector("source")
    //         // v.pause()
    //         source.setAttribute('src', v.src);
    //         v.pause();
    //         v.play();
    //     })
    // })

    import LazyLoad from "vanilla-lazyload";

    // import lozad from 'lozad'
    import {onMount} from "svelte";

    onMount(() => {
        // const observer = lozad()
        // observer.observe()
        var lazyLoadInstance = new LazyLoad({
            // Your custom settings go here
        });
        lazyLoadInstance.update();

    })
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
                    poster={post.attributes.Poster.data?.attributes.url}
                    smallPoster={post.attributes.Poster.data?.attributes.formats?.small?.url}
            />
        {/each}
    {/if}
</section>

<style>
</style>
