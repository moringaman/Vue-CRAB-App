<template>
  <div id='AddTodo'>
      <input class="input" type="text" v-model="todo"/>
      <button class="button is-success" @click="AddTodo">Add Todo</button><br>
      {{ todo }}
      </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    AddTodo() {
      const todo = this.todo;
      this.$store.dispatch('createAsset', todo);
    },
  },
};
</script>

<style>

@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css";
</style>