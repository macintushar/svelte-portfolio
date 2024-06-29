<script lang="ts">
  import type { CardButton } from "@/data";
  export let props: CardButton;
</script>

<a href={props.buttonLink} target="_blank" rel="noopener noreferrer">
  <button
    class="dark:bg-black bg-white dark:text-white text-black px-4 py-2 rounded-md flex flex-row justify-center h-10 gap-1"
  >
    {#if props.buttonHasImage}
      <img
        src={props.buttonImage}
        class="h-6 w-6 mx-auto"
        alt={"Button logo for" + props.buttonText}
      />
    {/if}

    <h1>{props.buttonText || ""}</h1>
  </button>
</a>
