<script>
    import Alessia from "../Alessia.svelte";

    import {PUBLIC_API_URL} from "$env/static/public";
    import {onMount} from "svelte";
    import rallax from 'rallax.js'


    onMount(() => {
        rallax(".top.left > figure", {speed: 0.2})
        rallax(".top.right > figure", {speed: 0.2})
        rallax(".bottom.left > figure", {speed: 0.2})
        rallax(".bottom.right > figure", {speed: 0.2})
    })


    export let data;
</script>

<svelte:head>
    <title>About - Alessia Milla | Creative Direction and Consultancy</title>
    <meta name="description" property="og:description"
          content="About Alessia Milla | Creative Direction and Consultancy"/>
    <meta name="title" property="og:title" content="About - Alessia Milla | Creative Direction and Consultancy"/>
    <meta name="author" property="og:author" content="Alessia Milla"/>
    <meta name="image" property="og:image"
          content={PUBLIC_API_URL + "/uploads/about_df28e2b94d.png"}/>
</svelte:head>

{#if data}
    <div class="container" data-scene>
        <Alessia bordered={false}/>
        <div class="video-container">
            <video src="/bg.mp4" muted autoplay loop playsinline></video>
        </div>
        <div class="content">
            <div class="inner-content">
                <div class="floating top left">
                    <figure data-speed="0.2">
                        <img src={PUBLIC_API_URL + data.data.data.attributes.TopLeftMedia.data.attributes.url}
                             alt={data.data.data.attributes.TopLeftCaption + " image"}>
                        <figcaption>{data.data.data.attributes.TopLeftCaption}</figcaption>
                    </figure>
                </div>
                <div class="floating top right">
                    <figure>
                        <img src={PUBLIC_API_URL + data.data.data.attributes.TopRightMedia.data.attributes.url}
                             alt={data.data.data.attributes.TopRightCaption + " image"}>
                        <figcaption>{data.data.data.attributes.TopRightCaption}</figcaption>
                    </figure>
                </div>
                {#if data.data.data.attributes.BottomLeftMedia.data}
                    <div class="floating bottom left">
                        <figure>
                            <img src={PUBLIC_API_URL + data.data.data.attributes.BottomLeftMedia.data.attributes.url}
                                 alt={data.data.data.attributes.BottomLeftCaption + " image"}>
                            <figcaption>{data.data.data.attributes.BottomLeftCaption}</figcaption>
                        </figure>
                    </div>
                {/if}
                {#if data.data.data.attributes.BottomRightMedia.data}
                    <div class="floating bottom right">
                        <figure>
                            <img src={PUBLIC_API_URL + data.data.data.attributes.BottomRightMedia.data.attributes.url}
                                 alt={data.data.data.attributes.BottomRightCaption + " image"}>
                            <figcaption>{data.data.data.attributes.BottomRightCaption}</figcaption>
                        </figure>
                    </div>
                {/if}
                <p>
                    {@html data.data.data.attributes.Content}
                </p>
            </div>
        </div>
    </div>
{/if}

<style>
    .container {
        border: var(--border-width) solid white;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
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
        margin-bottom: 15em;
    }


    video {
        object-fit: cover;
        position: absolute;
        min-width: 100%;
        height: 100%;
        top: 0;
        opacity: 0.2;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        z-index: 1;
        padding-bottom: 7em;
        /*background: rgba(0, 0, 0, 0.88);*/
    }

    .content > .inner-content {
        position: relative;
        /*background-color: #00000080;*/
        padding: 0 2em;
        /*width: 50%;*/
    }

    .floating {
        position: absolute;
    }

    .floating img, .floating figure {
        width: 100%;
        margin: 0;
    }

    .top {
        top: 4em;
    }

    .left {
        left: -350px;
    }

    .bottom {
        top: 550px;
    }

    .right {
        right: -350px;
    }

    .top.left {
        transform: rotate(-6deg);
    }

    .top.right {
        transform: rotate(6deg);
    }

    .bottom.left {
        transform: rotate(6deg);
    }

    .bottom.right {
        transform: rotate(-6deg);
    }

    figcaption {
        text-transform: uppercase;
        font-weight: bold;
        font-family: 'Lato', sans-serif;
        color: white;
        margin: 1em;
    }

    .video-container {
        flex: 1;
    }


    @media only screen and (max-width: 768px) {
        .inner-content {
            width: 100%;
        }

        .inner-content :global(table img) {
            margin: 1em;
            width: calc(100% - 2em);
        }

        .inner-content :global(table p:nth-of-type(2)) {
            text-align: center;
            font-weight: 900;
            margin-top: -20px;
        }

        .content > .inner-content > p {
            padding: 1em;
        }

        .floating {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        .inner-content :global(table) {
            display: none;
        }

        .inner-content {
            width: 50%;
        }

        .floating {
            width: 17vw;
        }

        .left {
            left: -17vw;
        }

        .right {
            right: -17vw;
        }
    }

    /*@media only screen and (min-width: 992px) {*/
    /**/
    /*}*/

    @media only screen and (min-width: 1024px) {
        .inner-content {
            width: 50%;
        }

        .floating {
            width: 200px;
        }

        .left {
            left: -20vw;
        }

        .right {
            right: -20vw;
        }
    }

    @media only screen and (min-width: 1440px) {
        .floating {
            width: 300px;
        }
    }

</style>
