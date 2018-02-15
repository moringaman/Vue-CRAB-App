<template>
  <div id='Home'>
    <h2>{{ msg }}</h2>
    <wx-add-todo></wx-add-todo>
    </div>
</template>

<script>
import AddTodo from './AddTodo';

export default {
  components: {
    wxAddTodo: AddTodo,
  },
  name: 'Home',
  data() {
    return {
      msg: 'A Distributed VueJs Todo App Using Bigchaindb & IPFS',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

