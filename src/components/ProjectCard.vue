<template>
    <article class="project-card">
      <h3>{{ project.title }}</h3>
  
      <p>{{ project.description }}</p>
  
      <ul>
        <li
          v-for="technology in project.technologies"
          :key="technology"
        >
          {{ technology }}
        </li>
      </ul>
  
      <a
        :href="project.github"
        target="_blank"
      >
        View on GitHub
      </a>
    </article>
  </template>
  
  <script setup lang="ts">
  import type { Project } from '@/data/projects'
  
  defineProps<{
    project: Project
  }>()
  </script>