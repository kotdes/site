<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<template>
  <main>
    <div class="title">
      <img alt="Lucide logo" class="logo" src="/assets/lucide/logo.svg" width="48" height="48" />
      <p><span style="color: var(--vt-c-lucide); font-weight: 600;">Lucide.</span> Unofficial Lucide Icons Picker for Roblox</p>
    </div>
    <div class="cards">
      <div class="card">
        <carousel :items-to-show="1" :autoplay="5000" :transition="600" :wrap-around="true">
          <slide v-for="slide in 2" :key="slide">
              <div class="image">
                <img :src="`/assets/lucide/screenie${slide}.png`"/>
              </div>
          </slide>
        </carousel>
        <h1 class="larger">Near native experience</h1>
        <p>Makes thing easier to work with.</p>
      </div>
    </div>
    <div style="display: inline-grid; justify-items: center;">
      <a class="inline-button" style="margin-top: 4rem" href="https://www.roblox.com/library/7734363201/Lucide-Icons"><ph-arrow-square-out :size="48" />Install</a>
      <a class="inline-button smaller" style="margin-top: 1rem" href="https://gitlab.com/koterahq/luciderblx/plugin"><ph-git-merge :size="24" />Git repository</a>
    </div>
    <p><smaller>
      <br>
      1. Copyright (MIT) © 2022 KoteraHQ. All rights reserved.<br>
      2. Lucide is trademark and the copyright (ISC) is held by Feather (Cole Bemis 2013-2022) (MIT) and Lucide Contributors 2022.<br>
      3. KoteraHQ-provided "Lucide Icons Picker" plugin has 0 association with the Lucide project itself or the contributors behind Lucide. This is an unofficial and community-sourced project bringing "Lucide Icons" to Roblox. Any inquiries of the Lucide project (e.g. icon suggestion) should be forwarded to the corresponding maintainer but not KoteraHQ.
    </smaller></p>
  </main>
</template>

<style scoped>
main {
  text-align: center;
}

.cards {
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 2fr;
  gap: 3rem;
}

.card h1 {
  font-weight: 600;
  font-size: 2rem;
}

.card p {
  font-size: 1.4rem;
  color: var(--color-text-less)
}

.card .image {
  padding-bottom: 2.2rem;
}
.card .image img {
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
}

.title {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
}

.title .logo {
  margin-right: .7rem;
}
.title p {
  padding: 0 0.5rem;
  font-weight: 400;
  color: var(--color-text-less);
  font-size: 2rem;
}
a.inline-button {
  font-size: 32px;
  display: inline-flex;
}

a.inline-button.smaller {
  color: var(--color-text-less);
  font-size: 18px;
  display: inline-flex;
}

a.inline-button * {
  margin: auto auto;
  margin-right: .5rem
}

a.inline-button:last-of-type {
  margin: auto auto;
}

@media only screen and (max-width: 860px) {
  .cards {
    grid-template-columns: 1fr;
    gap: 6rem;
  }

  .logo {
    display: none;
  }
}
</style>