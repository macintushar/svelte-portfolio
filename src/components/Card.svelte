<script lang="ts">
  import type { CardButton } from "@/data";
  export let imageURL: string = "https://via.placeholder.com/350x250";
  export let cardTitle: string = "Title";
  export let cardDescription: string = "Description";
  export let cardButtons: Array<CardButton>;
</script>

<div
  class="group delay-150 hover:delay-300 bg-black dark:bg-white text-white dark:text-black rounded-[30px] overflow-clip h-[250px] w-[350px] relative z-0 flex"
>
  <img
    src={imageURL}
    alt="placeholder"
    class="group-hover:invisible h-[250px] w-[350px]"
  />
  <div
    class="absolute inset-0 flex flex-col justify-center items-center z-10 group-hover:visible invisible"
  >
    <h3 class="text-xl font-semibold">{cardTitle}</h3>
    <p>{cardDescription}</p>
    <div class="flex flex-row gap-3">
      {#each cardButtons as button, index}
        <a href={button.buttonLink} target="_blank" rel="noopener noreferrer">
          <button
            class="dark:bg-black bg-white dark:text-white text-black px-4 py-2 rounded-md flex flex-row justify-center h-10 gap-1"
          >
            {#if button.buttonHasImage}
              <img
                src={button.buttonImage}
                class="h-6 w-6 mx-auto"
                alt={"Button logo for" + button.buttonText}
              />
            {/if}

            <h1>{button.buttonText || ""}</h1>
          </button>
        </a>
      {/each}
    </div>
    <!-- <slot name="card-hover-extra" /> -->
  </div>
</div>
