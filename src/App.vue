<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './components/Index'

export default {
  name: 'App',
  components: {
    Index,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  justify-content: center;
}

input {
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid darkgrey;
  margin-bottom: 0.25rem;
}

</style>
