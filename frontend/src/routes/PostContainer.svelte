<div class="container">
    <slot></slot>
</div>

<style>
    .container {
        display: flex;
        position: relative;
        height: 19vw;
        overflow: hidden;
        border: var(--border-width) solid white;
        margin: var(--negative-border-width) 0 0 0;
    }

    @media only screen and (max-width: 600px) {
        .container {
            height: 40vw;
        }
    }

    @media only screen and (min-width: 600px) {
        .container {
            height: 35vw;
        }
    }

    @media only screen and (min-width: 768px) {
        .container {
            height: 25vw;
        }
    }

    @media only screen and (min-width: 1024px) {
        .container {
            height: 19vw;
        }
    }
</style>
