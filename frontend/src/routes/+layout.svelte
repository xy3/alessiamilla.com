<script>
  import './styles.css';
  import Marquee from "./Marquee.svelte";
  import Nav from "./Nav.svelte";
  import {afterUpdate} from "svelte";
</script>

<Marquee/>
<div class="app">
  <Nav/>
  <main>
    <slot/>
  </main>
  <footer>
  </footer>
</div>


<style>
  .app {
    margin-left: var(--marquee-width);
    background: #000;
    min-height: 100vh;
  }

  main {
    padding: 4em 1em 1em;
  }

</style>
