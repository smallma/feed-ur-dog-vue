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
    metaInfo: {
      title: 'My Example App',
      titleTemplate: '%s - Yay!',
      meta: [
        {
          'content': 'width=device-width, initial-scale=1, viewport-fit=cover'
        },
      ],
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    components: {
      Header,
      Footer,
    }
  }
</script>

<style lang="scss">
  .container {
    position: relative;
    min-height: calc(100vh - 620px);
  }
</style>
