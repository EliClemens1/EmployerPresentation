<template>
    <main class="home">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  </template>
  
  <script setup lang="ts">
  import HeroSection from '@/components/HeroSection.vue'
  import AboutSection from '@/components/AboutSection.vue'
  import SkillsSection from '@/components/SkillsSection.vue'
  import ProjectsSection from '@/components/ProjectsSection.vue'
  import EducationSection from '@/components/EducationSection.vue'
  import ContactSection from '@/components/ContactSection.vue';

  </script>