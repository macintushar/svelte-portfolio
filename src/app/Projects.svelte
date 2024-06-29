<script>
  import Card from "@/components/Card.svelte";
  import Section from "@/components/Section.svelte";
  import { ProjectData } from "@/data/index";
</script>

<Section title={ProjectData.title} subtitle={ProjectData.subtitle}>
  <div
    slot="body"
    class="flex gap-2 sm:justify-around flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4"
  >
    {#if ProjectData.cards}
      {#each ProjectData.cards as project}
        <div class="mx-auto sm:mx-0">
          <Card
            imageURL={project.image}
            cardTitle={project.title}
            cardDescription={project.description}
            cardButtons={project.buttons}
          />
        </div>
      {/each}
    {/if}
  </div>
</Section>
