<template>
  <div id="app">
    <dashboard></dashboard>
      <h3>Badges List</h3>
      <div class="section">
        <button @click="setComponent('badges-list')">In Progress</button>
        <button @click="setComponent('achived-badges')">Achived</button>
      </div>
      <component :is="selectedComponent"></component>
</template>

<script>

import BadgesList from './components/BadgesList.vue';
import AchivedBadges from './components/AchivedBadges.vue';
export default {
  components: {
    BadgesList,
    AchivedBadges
  },
  data(){
    return{
      selectedComponent: 'badges-list',
    }
  },
  methods: {
    setComponent(cmd){
      this.selectedComponent = cmd;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.section {
  background: #fff;
  padding: 15px;
}
button {
  margin: 5px 10px 0;
  padding: 5px 15px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>