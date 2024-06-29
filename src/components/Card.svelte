<script lang="ts">
  import type { CardButton } from "@/data";
  import Button from "./Button.svelte";
  export let imageURL: string = "https://via.placeholder.com/350x250";
  export let cardTitle: string = "Title";
  export let cardDescription: string = "Description";
  export let cardButtons: Array<CardButton>;
</script>

<div
  class="group delay-150 hover:delay-300 text-white dark:text-black rounded-[30px] overflow-clip h-[250px] max-w-[350px] min-w-[250px] relative z-0 flex"
>
  <img
    src={imageURL}
    alt="card-thumbnail"
    class="group-hover:invisible h-[250px] w-[350px]"
  />
  <div
    class="absolute bg-black dark:bg-white inset-0 flex flex-col justify-center items-center z-10 group-hover:visible invisible gap-3 p-3"
  >
    <div>
      <h3 class="text-xl font-semibold text-center">{cardTitle}</h3>
      <p class="text-center">{cardDescription}</p>
    </div>
    <div class="flex flex-row gap-3">
      {#each cardButtons as button}
        <Button props={button} />
      {/each}
    </div>
  </div>
</div>
