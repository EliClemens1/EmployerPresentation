<template>
    <section class="projects">
      <h2>Projects</h2>
  
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </section>
  </template>
  
  <script setup lang="ts">
  import ProjectCard from '@/components/ProjectCard.vue'
  import { projects } from '@/data/projects'
  </script>