<script>
  import Card from "@/components/Card.svelte";
  import Section from "@/components/Section.svelte";
  import { ProjectData } from "@/data/index";
</script>

<Section title={ProjectData.title} subtitle={ProjectData.subtitle}>
  <div
    slot="body"
    class="flex gap-2 md:justify-around md:flex-row flex-col mt-4"
  >
    {#each ProjectData.cards as project, index}
      <Card
        imageURL={"images/" + project.image}
        cardTitle={project.title}
        cardDescription={project.description}
        cardButtons={project.buttons}
      />
    {/each}
  </div>
</Section>
