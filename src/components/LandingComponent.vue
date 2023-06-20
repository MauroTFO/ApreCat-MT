<template>
  <header>
    <nav>
      <picture>
      <source srcset="./icons/paw-white.png" media="(prefers-color-scheme:dark)" />
      <img src="./icons/paw.png" />
    </picture>
      <h1>ApreCat</h1>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-top: 0em;
}

img {
  width: 5em;
}

</style>