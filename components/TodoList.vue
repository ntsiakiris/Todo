<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center">To-Do List</h1>
    <AddTodo @add="addTodo" />
    <ul class="list-group">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
        @edit="editTodo"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './AddTodo.vue';
import TodoItem from './TodoItem.vue';

interface Todo {
  id: string;
  text: string;
}

const todos = ref<Todo[]>([]);

// Load todos from LocalStorage on mount
onMounted(() => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
  }
});

// Watch for changes and update LocalStorage
watch(todos, (newTodos) => {
  localStorage.setItem('todos', JSON.stringify(newTodos));
}, { deep: true });

const addTodo = (text: string) => {
  todos.value.push({ id: uuidv4(), text });
};

const removeTodo = (id: string) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
};

const editTodo = (id: string, newText: string) => {
  const todo = todos.value.find(todo => todo.id === id);
  if (todo) {
    todo.text = newText;
  }
};
</script>
