<template>
  <badge-card v-for="badge in badges" :key="badge">
    <template #default>
      <h4>{{ badge }}</h4>
    </template>
  </badge-card>
</template>
<script>
export default {
  data() {
    return {
      badges: ['Learning Goal', 'Complete Project', 'Practice', 'Finish'],
    };
  },
};
</script>
