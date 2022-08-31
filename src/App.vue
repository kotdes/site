<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="nav-inner scroll">
        <RouterLink to="/">Koute</RouterLink>
        <RouterLink to="/panel">Panel</RouterLink>
        <RouterLink to="/cmd">Commander</RouterLink>
        <RouterLink to="/lucide">Lucide</RouterLink>
      </div>
      <img width="24" height="24" class="kotera-logo" />
    </nav>
  </header>
  <RouterView />
  <footer>
    <img class="kotera-fullLogo" />
    <div class="links">
      <a alt="Discord" href="https://discord.gg/JSHRQkrafN"><PhDiscordLogo :size="24" weight="fill" /></a>
      <a alt="GitHub" href="https://github.com/koterahq/"><PhGithubLogo :size="24" weight="fill" /></a>
      <a alt="GitLab" href="https://gitlab.com/koterahq/"><PhGitlabLogo :size="24" weight="fill" /></a>
      <a alt="Roblox Group" href="https://www.roblox.com/groups/10737922/Kotera#!/about"><PhUsersThree :size="24" weight="fill" /></a>
    </div>
  </footer>
</template>

<script>
  import { PhDiscordLogo, PhGithubLogo, PhGitlabLogo, PhUsersThree } from "phosphor-vue";
  export default {
    name: "App",
    components: {
      PhDiscordLogo,
      PhGithubLogo,
      PhGitlabLogo,
      PhUsersThree,
    },
  };
</script>


<style scoped>
header {
  padding: 2rem;
  padding-bottom: 0;
}
main {
  padding: 0 2rem 5rem;
}
header nav {
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2.5rem
}

header .nav-inner {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

header .nav-inner a {
  padding: .5rem 2rem;
  font-size: 16px;
  color: var(--color-text-less);
  font-weight: 500;
}

header .nav-inner .router-link-exact-active {
  color: var(--vt-c-kotera);
}

header .nav-inner .router-link-exact-active::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 2px;
  background-color: var(--vt-c-kotera)
}

footer {
  padding: 5rem 0;
  border-top: 1px solid var(--color-border);
}

footer .links {
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  margin-top: 2rem;
}

footer .links > a {
  margin: 0 1rem;
}

footer .kotera-fullLogo {
  display: block;
  mask-size: auto 32px;
  mask-repeat: no-repeat;
  mask-position: center;
  width: 100%;
  height: 50px;
}

.kotera-fullLogo {
  mask-image: url(/assets/fullLogo.svg);
  mask-size: cover;
  background-color: var(--vt-c-kotera);
}

.kotera-logo {
  mask-image: url(/assets/logo.svg);
  mask-size: cover;
  background-color: var(--vt-c-kotera);
}
</style>