<script setup>
</script>

<template>
  <main>
    <div class="title">
      <!----<img alt="Panel logo" class="logo" src="@/assets/panel/logo.svg" width="36" height="36" />-->
      <p><span style="color: var(--vt-c-panel); font-weight: 600;">Panel.</span> Game moderation enhanced.</p>
    </div>
    <div class="cards">
      <div class="card">
        <div class="image">
          <img src="/assets/panel/screenie.png"/>
        </div>
        <h1 class="larger">Coming soon</h1>
        <p>Here's a screenshot showcasing the product for now.</p>
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