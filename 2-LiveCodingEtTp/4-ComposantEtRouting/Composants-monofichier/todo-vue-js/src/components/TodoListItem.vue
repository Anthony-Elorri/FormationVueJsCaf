<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">
      X
    </button>
  </li>
</template>

<script>
export default {
  name: "todoListInput",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
