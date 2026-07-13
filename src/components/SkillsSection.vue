<template>
  <section class="skills">
    <h2>Technical Skills</h2>

    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill">
        {{ skill }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from '@/data/skills'
</script>