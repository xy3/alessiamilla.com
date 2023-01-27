<script lang="ts">
    import {afterUpdate, onMount} from "svelte";
    import rallax from "rallax.js";
    import Lightbox from "../../Lightbox.svelte";
    import Loader from "../../Loader.svelte";
    import Overlays from "./Overlays.svelte";
    import {PUBLIC_API_URL} from "$env/static/public";

    let img = ""
    let open = false

    export let data: {
        data: {
            data: {
                attributes: {
                    Title: string
                    Content: string
                    HeaderImage: object[]
                    Poster: object[]
                    Color: string
                    Slug: string
                    Overlays: object[]
                }
            }
        }
    };
    let content: string;

    onMount(async () => {
        const post = await data.data.data[0]

        content = post.attributes.Content as string
        content = content.replaceAll("<p> </p>", "")
        content = content.replaceAll('<div class="vsc-controller"> </div>', "")
        content = content.replaceAll(' ', " ")

        content = content.replaceAll('"/uploads', `"${PUBLIC_API_URL}/uploads`)
        if (await document.querySelector(".overlays-container")) {
            rallax(".overlays-container", {speed: 0.5})
        }
    })


    afterUpdate(async () => {
        const videos = await document.querySelectorAll("video")
        if (videos) {
            await videos.forEach(vid => {
                vid.playsInline = true
                vid.play()
            })
        }
        // document.querySelector("video").play()
        document.querySelectorAll('.content img').forEach((item) => {
            item.addEventListener('click', () => {
                img = item.src
                open = true
            })
        });
    })
</script>

<svelte:head>
    {#if data.data.data}
        <title>{data.data.data[0].attributes.Title} | Alessia Milla</title>
        <meta name="description" content={data.data.data[0].attributes.Title}/>
        <meta property="og:description" content={data.data.data[0].attributes.Title}/>
        <meta property="og:image" content={PUBLIC_API_URL + data.data.data[0].attributes.Poster.data?.attributes.url}/>
    {:else}
        <title>Alessia Milla | Creative Director</title>
        <meta name="description" content="Read this blog post from Alessia Milla | Creative Director"/>
    {/if}
</svelte:head>

{#if data.data.data}
    {#each data.data.data as post}
        <div class="container" style="background-color:{post.attributes.Color};">
            <div class="content">
                <h1>
                    {post.attributes.Title}
                </h1>
                <div class="inner-content">
                    {#if post.attributes.Tags.length > 0}
                        <h2 class="tags">
                            {#each post.attributes.Tags as tag, index}
                                <span>{tag.Tag}</span>
                                {#if index < post.attributes.Tags.length - 1}
                                    <i>&#x2022;</i>
                                {/if}
                            {/each}
                        </h2>
                    {/if}
                    {#if content}
                        {@html content}
                    {:else}
                        <Loader/>
                    {/if}
                </div>
            </div>
            {#if post.attributes.Overlays.data && post.attributes.Overlays.data.length > 0}
                <Overlays overlays={post.attributes.Overlays.data}/>
            {/if}
        </div>
    {/each}
{/if}
<Lightbox img={img} open={open} setOpen={(isOpen) => {open = isOpen}}/>


<style>
    :global(.inner-content img) {
        cursor: pointer !important;
    }

    :global(p) {
        font-size: 13px;
        text-transform: uppercase;
        line-height: 2.5em;
        letter-spacing: 0.3em;
    }

    :global(small) {
        line-height: 2.5em;
        letter-spacing: 0.2em;
    }


    :global(iframe) {
        height: unset;
    }

    .container :global(table td > p > img) {
        width: 100% !important;
        margin: 0 !important;
    }

    .container :global(table td > p) {
        padding: 0 !important;
    }

    .container {
        border: var(--border-width) solid white;
        color: white;
        position: relative;
        overflow: hidden;
    }

    h2.tags {
        text-transform: uppercase;
        font-size: 2.5em;
        line-height: 0.2em;
        display: flex;
        gap: 0.25em;
        font-weight: 500;
    }

    h2.tags i {
        font-style: normal;
        font-size: 0.5em;
    }


    h1 {
        font-family: 'Vegawanty', serif;
        text-align: center;
        font-size: 11vw;
        margin: 2rem 0;
        text-transform: uppercase;
        font-weight: lighter;
    }

    .container :global(table) {
        width: auto !important;
        margin: 0 -4em;
        padding: 0.5em 0;
        display: flex;
        height: unset !important;
    }

    .container :global(tbody) {
        width: 100%;
    }

    .container :global(tr) {
        display: flex;
        gap: 1em;
    }

    .container :global(td) {
        flex: 1;
    }

    .container :global(table img) {
        width: 100%;
        /*height: 100%;*/
        object-fit: cover;
        /*aspect-ratio: 16/9;*/
    }

    .container :global(p) {
        margin: 0;
        padding: 0.5em 0;
    }

    .container :global(p > img) {
        width: calc(100% + 10em);
        height: 100%;
        object-fit: cover;
        /*aspect-ratio: 16/9;*/
        margin: 0 -5em;
    }

    .container :global(p > video) {
        width: calc(100% + 10em);
        height: 100%;
        object-fit: cover;
        margin: 0 -5em;
    }

    .container :global(p > iframe) {
        width: calc(100% + 10em);
        border: 0;
        aspect-ratio: 16/9;
        margin: 0 -5em;
    }

    .container :global(p > iframe), :global(strong > iframe) {
        width: calc(100% + 10em);
        border: 0;
        aspect-ratio: 16/9;
        margin: 0 -5em;
    }

    :global(td) {
        height: unset !important;
    }

    :global(tr) {
        height: unset !important;
    }

    .inner-content {
        display: flex;
        flex-direction: column;
        /*gap: 0.5em;*/
        /*max-width: -webkit-fill-available;*/
        /*max-width: -webkit-fill-available;*/
        width: 80%;
        width: -moz-available; /* WebKit-based browsers will ignore this. */
        width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
        width: fill-available;
    }

    .content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        .content {
            margin: 5em 2em;
        }

        .inner-content {
            margin: 0 10%;
        }
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        .content {
            margin: 3em 3em;
        }

        h1 {
            font-size: 13vw;
        }

        .inner-content {
            margin: 0 5%;
        }

        .container :global(table) {
            margin: 0 -2em;
        }

        .container :global(p > img) {
            width: calc(100% + 5em);
            margin: 0 -2.5em;
        }

        .container :global(p > video) {
            width: calc(100% + 5em);
            margin: 0 -2.5em;
        }

        .container :global(p > iframe) {
            width: calc(100% + 5em);
            margin: 0 -2.5em;
        }

        .container :global(strong > iframe) {
            width: calc(100% + 5em);
            margin: 0 -2.5em;
        }

        .container :global(iframe) {
            width: calc(100% + 4em);
            margin: 0 -2em;
        }

        /*.container :global(video) {*/
        /*  width: calc(100% + 2em);*/
        /*  margin: 0 -0em;*/
        /*}*/
    }


    @media only screen and (max-width: 500px) {
        .content {
            margin: 2em 2.1em;
        }

        .inner-content {
            margin: 0 0;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {


    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        .content {
        }

        .inner-content {
            margin: 0 18%;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1024px) {
        .content {
            margin: 5em 10em;
        }

        .inner-content {
            margin: 0 18%;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1440px) {
        .content {
            margin: 5em 15em;
        }

        .inner-content {
            margin: 0 18%;
        }
    }

</style>
