<script>
    import PostContainer from "./PostContainer.svelte";
</script>

<div class="header">
    <PostContainer>
        <div class="inner-content">
            <div class="text">
                <h1>
                    Alessia Milla
                </h1>
                <h4>Creative Direction and consultancy</h4>
            </div>
        </div>
    </PostContainer>
</div>

<style>
    .header {
        padding: 0;
    }

    h1 {
        text-transform: uppercase;
        margin: 0;
        font-family: Vegawanty, serif;
        font-weight: lighter;
        letter-spacing: 12px;
        white-space: nowrap;
    }

    .inner-content {
        display: flex;
        flex-direction: column;
        margin-top: -1vw;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .text {
        /*width: 90%;*/
        padding: 1em;
    }


    h4 {
        text-align: left;
        margin-bottom: 0;
        text-transform: uppercase;
        font-weight: bold;
        font-family: 'Lato', sans-serif;
        letter-spacing: 2px;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        h1 {
            /*text-align: center;*/
            font-size: 7vw;
            white-space: normal;
            /*font-weight: 600;*/
        }

        h4 {
            margin-top: 0;
            font-weight: 400;
            font-size: 2.5vw;
        }
    }


    @media only screen and (max-width: 407px) {
        h1 {
            /*text-align: center;*/
            font-size: 6.1vw;
            white-space: normal;
            /*font-weight: 600;*/
        }

        h4 {
            margin-top: 0;
            font-weight: 400;
            font-size: 2.5vw;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        h1 {
            font-size: 9vw;
        }

        h4 {
            font-size: 1em;
            margin-top: -1.2vw;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 769px) {
        h1 {
            font-size: 11vw;
        }

        h4 {
            font-size: 1.3em;
            margin-top: -1.2vw;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1024px) {
        h1 {
            font-size: 11vw;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1440px) {
    }
</style>
