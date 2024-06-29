<script>
  import Card from "@/components/Card.svelte";
  import Section from "@/components/Section.svelte";
  import { BlogData } from "@/data/index";
</script>

<Section title={BlogData.title} subtitle={BlogData.subtitle}>
  <div
    slot="body"
    class="flex gap-2 justify-center md:justify-around md:flex-row flex-col mt-4"
  >
    {#if BlogData.cards}
      {#each BlogData.cards as blog}
        <Card
          imageURL={blog.image}
          cardTitle={blog.title}
          cardDescription={blog.description}
          cardButtons={blog.buttons}
        />
      {/each}
    {/if}
  </div>
</Section>
