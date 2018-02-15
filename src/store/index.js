import Vue from 'vue';
import Vuex from 'vuex';
import driver from 'bigchaindb-driver';
import bdbOrm from '../helpers/bdbOrm';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    loadedTodos: [],
  },
  mutations: {
    setLoadedTodos(state, payload) {
      state.loadedTodos = payload;
    },
    addTodo(state, payload) {
      state.loadedTodos.push(...payload);
    },
  },
  actions: {
    createAsset({ commit }) {
      const UsrsKeys = new driver.Ed25519Keypair();
      // const topic = payload.topic;
      bdbOrm.todosModel
        .create({
          Keypair: UsrsKeys,
          data: {
            text: payload.text,
            createdOn: new Date(),
          },
        }).then((asset) => {
          // console.log(asset);
          commit('addTodo', asset);
        });
    },
    createTodoTopic({ commit }, payload) {
      // Create TodoList Topic
      // TODO Check if list already exists & Add create default topic on app start
      bdbOrm.define(payload, `https://schema.org/v1/${payload}`);
    },
    loadTodos({ commit }, payload) {
      // get all objects with retrieve()
      // or get a specific object with retrieve(object.id)
      // let topicModel = payload.model
      bdbOrm.todosModel
        .retrieve()
        .then((assets) => {
          // assets is an array of myModel
          commit('loadedTodos', assets);
          // console.log(assets.map(asset => asset.id));
        });
    },
  },
  getters: {
    loadedTodos(state) {
      return state.loadedTodos;
    },
  },
});
