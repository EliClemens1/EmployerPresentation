<template>
    <main class="home">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  </template>
  
  <script setup lang="ts">
  import HeroSection from '@/components/HeroSection.vue'
  import AboutSection from '@/components/AboutSection.vue'
  import SkillsSection from '@/components/SkillsSection.vue'
  import ProjectsSection from '@/components/ProjectsSection.vue'
  </script>