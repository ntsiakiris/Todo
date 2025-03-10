<template>
  <div class="input-group mb-3">
    <input
      v-model="newTodo"
      @keyup.enter="add"
      type="text"
      class="form-control"
      placeholder="Add a new task"
    />
    <button @click="add" class="btn btn-primary">Add</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits<{
  (e: 'add', text: string): void;
}>();

const newTodo = ref('');

const add = () => {
  if (newTodo.value.trim()) {
    emit('add', newTodo.value);
    newTodo.value = ''; 
  }
};
</script>
