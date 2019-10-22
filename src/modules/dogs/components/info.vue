<template>
  <div>
    <div>{{this.birthdate}}</div>
    <div>{{ getDays }}</div>
    <div>{{ getMonths }}</div>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
  export default {
    name: 'info',
    methods: {

    },
    computed: {
      ...mapState('dog', {
          birthdate: state => state.birthdate,
          weight: state => state.weight,
          size: state => state.size,
          kcal: state => state.kcal,
        }),
      ...mapGetters('dog', [
        'getDays',
        'getMonths'
      ]),
    }
  }
</script>

<style lang="scss" scoped>

</style>
