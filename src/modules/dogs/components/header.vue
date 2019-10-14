<template>
  <div>
    <div class="header">
      {{$t('message.common.Hello')}}
      <figure></figure>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headers',
    created () {

      setTimeout(() => {
        this.$i18n.locale = 'en';
      }, 3000);
    }
  }
</script>

<style lang="scss" scoped>

</style>
