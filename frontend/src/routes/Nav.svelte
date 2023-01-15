<nav>
  <a class="underline-from-center" href="/">Work</a>
  <a class="underline-from-center" href="/about">About</a>
  <div style="flex:1"></div>
  <a class="underline-from-center" href="/">alessiamilla.com</a>
</nav>

<style>
  nav {
    padding: 1em;
    position: fixed;
    background: black;
    display: flex;
    right: 0;
    gap: 1em;
    left: 0;
    margin-left: var(--marquee-width);
    z-index: 10;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    nav {
      margin-left: 0;
    }
  }

  nav a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    padding: 0.4em 0;
  }
</style>
