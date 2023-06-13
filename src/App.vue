<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

fetch("http://localhost:8000/get.php")
  .then((response) => response.json())
  .then((json) => console.log(json));
</script>

<template>
  <header>
    
  </header>

  <main>
    <section>
      <h1>Cadastro</h1><br>
    </section>

    <section>
        <form class="formulario-cadastro" ction="">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Seu Email">
          <label for="nome">Nome</label>
          <input type="text" name="nome" id="nome" placeholder="Nome Completo">
          <label for="senha">Senha</label>
          <input type="password" name="senha" id="senha" placeholder="Exemplo: 00000000aA@">
          <input type="password" name="senha" id="senha" placeholder="Confirmar senha">
        </form>
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.formulario-cadastro {
  display: flex;
  align-items: center;
  flex-flow: column wrap;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
