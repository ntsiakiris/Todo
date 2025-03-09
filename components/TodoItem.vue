<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>{{ todo.text }}</span>
    <div>
      <button @click="edit" class="btn btn-sm btn-warning me-2">Edit</button>
      <button @click="remove" class="btn btn-sm btn-danger">Remove</button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Todo {
  id: string;
  text: string;
}

const props = defineProps<{ todo: Todo }>();

const emit = defineEmits<{
  (e: 'remove', id: string): void;
  (e: 'edit', id: string, newText: string): void;
}>();

const remove = () => {
  emit('remove', props.todo.id);
};

const edit = () => {
  const newText = prompt('Edit task:', props.todo.text);
  if (newText) {
    emit('edit', props.todo.id, newText);
  }
};
</script>
