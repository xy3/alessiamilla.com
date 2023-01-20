<script lang="ts">
    import {PUBLIC_API_URL} from "$env/static/public";
    import {afterUpdate} from "svelte";

    export let slug
    export let title
    export let image
    export let color = "#000000"
    $: vid = image && image.endsWith('mp4')

    afterUpdate(async () => {
        await document.querySelectorAll("video").forEach(v => {
            const source = v.querySelector("source")
            // v.pause()
            source.setAttribute('src', v.src);
            v.load();
            v.play();
        })
    })

</script>

<a href="/post/{slug}" on:click>
    <div class="container">
        {#if image && !vid}
            <img src={PUBLIC_API_URL + image} alt={title + " image"}>
        {/if}
        {#if vid}
            <video src={PUBLIC_API_URL + image} playsinline autoplay muted loop style={"background:"+color}>
                <source src={PUBLIC_API_URL + image} type="video/mp4">
            </video>
        {/if}
        <div class="title" style="background-color:{color+'80'};">
            <h3>{title}</h3>
        </div>
    </div>
</a>

<style>
    .container {
        display: flex;
        position: relative;
        /*height: 400px;*/
        height: 19vw;
        overflow: hidden;
        border: var(--border-width) solid white;
        margin: var(--negative-border-width) 0 0 0;
    }

    video {
        object-fit: cover;
        object-position: center;
        flex: 1;
        width: 100%;
    }

    .title {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    h3 {
        text-transform: uppercase;
        font-size: 4vw;
        margin: 0;
    }

    .title:hover {
        opacity: 1;
    }

    .title:hover h3 {
        animation-name: fontChange;
        animation-duration: 0.6s;
        animation-iteration-count: infinite;
        animation-timing-function: step-end;
    }


        @keyframes fontChange {
        0% {
            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: bold;
            letter-spacing: 0.0em;
            font-size: 4.25vw;
        }
        33% {
            font-family: 'Vegawanty', serif;
            font-style: normal;
            margin-bottom: -7px;
            letter-spacing: 0.3vw;
            font-size: 4.2vw;
        }
        66% {
            font-family: 'Lato', sans-serif;
            font-weight: lighter;
            font-style: italic;
            margin-bottom: -3px;
            letter-spacing: 0.2vw;
            font-size: 4.3vw;
        }
    }


    img {
        object-fit: cover;
        object-position: center;
        flex: 1;
        width: 100%;
    }

/*      !* Extra small devices (phones, 600px and down) *!*/
/*@media only screen and (max-width: 500px) {*/
/*    h3 {*/
/*        text-align: center;*/
/*        font-size: 1em;*/
/*    }*/

/*        @keyframes fontChange {*/
/*        0% {*/
/*            font-family: 'Lato', sans-serif;*/
/*            font-style: normal;*/
/*            font-weight: bold;*/
/*            letter-spacing: 0.0em;*/
/*            font-size: 1.05em;*/
/*        }*/
/*        33% {*/
/*            font-family: 'Vegawanty', serif;*/
/*            font-style: normal;*/
/*            margin-bottom: -4px;*/
/*            letter-spacing: 0.1em;*/
/*            font-size: 1em;*/
/*        }*/
/*        66% {*/
/*            font-family: 'Lato', sans-serif;*/
/*            font-weight: lighter;*/
/*            font-style: italic;*/
/*            margin-bottom: 0;*/
/*            letter-spacing: 0.03em;*/
/*            font-size: 1.1em;*/
/*        }*/
/*    }*/

/*            .container {*/
/*        height: 40vw;*/
/*    }*/

/*}*/



/*      !* Extra small devices (phones, 600px and down) *!*/
/*@media only screen and (min-width: 501px) {*/
/*    h3 {*/
/*        text-align: center;*/
/*        font-size: 2vw;*/
/*    }*/

/*        @keyframes fontChange {*/
/*        0% {*/
/*            font-family: 'Lato', sans-serif;*/
/*            font-style: normal;*/
/*            font-weight: bold;*/
/*            letter-spacing: 0.0em;*/
/*            font-size: 4.25vw;*/
/*        }*/
/*        33% {*/
/*            font-family: 'Vegawanty', serif;*/
/*            font-style: normal;*/
/*            margin-bottom: -4px;*/
/*            letter-spacing: 0.1em;*/
/*            font-size: 4.2vw;*/
/*        }*/
/*        66% {*/
/*            font-family: 'Lato', sans-serif;*/
/*            font-weight: lighter;*/
/*            font-style: italic;*/
/*            margin-bottom: 0;*/
/*            letter-spacing: 0.03em;*/
/*            font-size: 4.3vw;*/
/*        }*/
/*    }*/

/*                        .container {*/
/*        height: 30vw;*/
/*    }*/

/*}*/





/*!* Small devices (portrait tablets and large phones, 600px and up) *!*/
/*@media only screen and (min-width: 1024px) {*/
/*    @keyframes fontChange {*/
/*        0% {*/
/*            font-family: 'Lato', sans-serif;*/
/*            font-style: normal;*/
/*            font-weight: bold;*/
/*            letter-spacing: 0.0em;*/
/*            font-size: 2.4em;*/
/*        }*/
/*        33% {*/
/*            font-family: 'Vegawanty', serif;*/
/*            font-style: normal;*/
/*            margin-bottom: -15px;*/
/*            letter-spacing: 0.05em;*/
/*            font-size: 2.5em;*/
/*        }*/
/*        66% {*/
/*            font-family: 'Lato', sans-serif;*/
/*            font-weight: lighter;*/
/*            font-style: italic;*/
/*            margin-bottom: 0;*/
/*            letter-spacing: normal;*/
/*            font-size: 2.5em;*/
/*        }*/
/*    }*/
/*}*/


/*    !* Small devices (portrait tablets and large phones, 600px and up) *!*/
/*@media only screen and (min-width: 1440px) {*/
/*    @keyframes fontChange {*/
/*        0% {*/
/*            font-family: 'Lato', sans-serif;*/
/*            font-style: normal;*/
/*            font-weight: bold;*/
/*            letter-spacing: 0.0em;*/
/*            font-size: 2.9em;*/
/*        }*/
/*        33% {*/
/*            font-family: 'Vegawanty', serif;*/
/*            font-style: normal;*/
/*            margin-bottom: -15px;*/
/*            letter-spacing: 0.05em;*/
/*            font-size: 3em;*/
/*        }*/
/*        66% {*/
/*            font-family: 'Lato', sans-serif;*/
/*            font-weight: lighter;*/
/*            font-style: italic;*/
/*            margin-bottom: 0;*/
/*            letter-spacing: normal;*/
/*            font-size: 3em;*/
/*        }*/
/*    }*/
/*}*/



</style>
