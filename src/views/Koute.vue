<script setup>
import { ref } from "vue";
const cards = ref([
  {img: "many-pages.png", title: "Built for multi-paged UIs", text: "Always work no matter how complex your UI is"},
  {img: "properties.png", title: "Build contextual pages", text: "Pass parameters to your page just like how you do with components in Fusion"},
  {img: "transitions.png", title: "Move between pages smooothly", text: "Build awesome page transitions with Koute without pain"},
  {img: "onboarding.png", title: "Learn fast, work fast", text: "Learn Koute within minutes without advanced knowledge*"},
])
</script>

<template>
  <main>
    <div class="title">
      <img alt="Koute logo" class="logo" src="/assets/koute/logo.svg" width="36" height="36" />
      <p><span style="color: var(--vt-c-koute); font-weight: 600;">Koute.</span> Routing in Fusion supercharged.</p>
    </div>
    <div class="cards">
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="index"
      >
        <div class="image">
          <img :src="`/assets/koute/${card.img}`"/>
        </div>
        <h1 class="larger">{{card.title}}</h1>
        <p>{{card.text}}</p>
      </div>
    </div>
    <div style="display: inline-grid; justify-items: center;">
      <a class="inline-button" style="margin-top: 4rem" href="https://koterahq.larksuite.com/docx/doxuspyRDXvSkDpWS0IcW7OMH5b"><ph-arrow-square-out :size="48" />Get started</a>
      <a class="inline-button smaller" style="margin-top: 1rem" href="https://github.com/koterahq/koute.git"><ph-git-merge :size="24" />Git repository</a>
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
  grid-template-columns: 1fr 1fr;
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
  box-shadow: var(--vt-shadow);
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
  opacity: 80%;
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