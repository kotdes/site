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
      <img alt="Commander logo" class="logo" src="/assets/cmd/logo.svg" width="48" height="48" />
      <p><span style="color: var(--vt-c-cmd); font-weight: 600;">Commander.</span> Classic masterpiece <b>revived.</b></p>
    </div>
    <div class="cards">
      <div class="card">
        <carousel :items-to-show="1" :autoplay="5000" :transition="600" :wrap-around="true">
          <slide v-for="slide in 3" :key="slide">
              <div class="image">
                <img :src="`/assets/cmd/screenie${slide}.png`"/>
              </div>
          </slide>
        </carousel>
        <h1 class="larger">Coming soon</h1>
        <p>Stay tuned for more!</p>
      </div>
    </div>
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