<template>
  <div>
    <BaseInputText
      v-model="newTodoText"
      placeholder="Nouvelle todo"
      @keydown.enter="addTodo"
    />
    <ul v-if="todos.length">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
    <p v-else>
      Il n'y a aucune todo dans la liste. Ajoutez une nouvelle todo dans le champs ci-dessus!
    </p>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText";
import TodoListItem from "./TodoListItem";

let nextTodoId = 1;
export default {
  name: "TodoList",
  components: {
    BaseInputText,
    TodoListItem,
  },
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: nextTodoId++,
          text: "Apprendre Vue.js",
        },
        {
          id: nextTodoId++,
          text: "En apprendre plus sur les composants monofichier",
        },
        {
          id: nextTodoId++,
          text: "Etres raide dingue de Vue.js",
        },
      ],
    };
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText,
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== idToRemove;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
