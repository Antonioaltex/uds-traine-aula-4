<template>
  <div class="hello">
    <h1>vamos contar -+-+</h1>
      <p>Valor: {{ valor }}</p>
      <p>{{parOuImpar}}</p>
    <form action="/action_page.php">
    Adicione um numero: <input type="text" name="fname" v-model="entrada"><br>
</form>
    <button @click="agregarValor()">
    Agregar + 1
    </button>
    <button @click="diminuirValor()">
    Diminuir - 1
    </button>
    <button @click="zerarValor()">
    Zerar
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      valor: 0,
      entrada: 0,
    };
  },
  computed: {
    parOuImpar() {
      if (this.valor % 2 === 0) {
        return 'Par';
      }

      return 'Impar';
    },
  },
  methods: {
    agregarValor() {
      this.valor += parseInt(this.entrada, 10);
    },
    diminuirValor() {
      this.valor -= parseInt(this.entrada, 10);
    },
    zerarValor() {
      this.valor = 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
