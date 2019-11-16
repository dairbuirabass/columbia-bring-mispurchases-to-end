import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    colorEyes: {
      value: ''
    },
    colorHair: '',
    colorSkin: '',
    user: { id: 'aaa', name: 'Adsasas' },
    events: [
      {
        id: 1,
        title: 'title one',
        organizer: 'a'
      },
      {
        id: 2,
        title: 'title two',
        organizer: 'b'
      },
      {
        id: 3,
        title: 'title three',
        organizer: 'c'
      }
    ],
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  mutations: {
    setEyesColor(state, color){
      state.colorEyes = color
    }
  },
  actions: {
    setNewEyesColor(context, color){
      context.commit('setEyesColor', color);
    }
  },
  getters: {
    colorEyes: state => {
      return state.colorEyes
    },
    catLength: state => {
      return state.categories.length
    },
    doneToDos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
});