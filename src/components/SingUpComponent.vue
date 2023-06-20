<script>
fetch("http://localhost:8000/get.php")
  .then((response) => response.json())
  .then((json) => console.log(json));
</script>

<template>
    <main>
        <section>
          <h1>Cadastro</h1><br>
        </section>
    
        <section>
            <form class="formulario-cadastro" action="">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Seu Email">
              <label for="nome">Nome</label>
              <input type="text" name="nome" id="nome" placeholder="Nome Completo">
              <label for="senha">Senha</label>
              <input type="password" name="senha" id="senha" placeholder="Exemplo: 00000000aA@">
              <input type="password" name="senha" id="senha" placeholder="Confirmar senha">
              <button type="submit">Enviar</button>
            </form>
        </section>
      </main>
</template>

<style scoped></style>
