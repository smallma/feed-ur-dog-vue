<template>
  <div>
    <Header/>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/header';
  import Footer from './components/footer';

  export default {
    name: 'Dogs',
    components: {
      Header,
      Footer,
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    margin-top: 60px;
    padding-bottom: 400px;
  }
</style>
