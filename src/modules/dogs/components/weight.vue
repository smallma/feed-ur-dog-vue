<template>
  <div @click="handleWeightClick" class="control_item weight">
    <i class="item_icon fas fa-weight"></i>
    <p class="item_text">{{ $t("message.dog.weight")}}</p>
    <div class="options2" ref="optionWeight">
      <span class="description">{{ $t("message.dog.inputWeight") }}</span>
      <input v-model="inputWeight" class="input-weight"></input>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'weight',
    data () {
      return {
        inputWeight: '2.5'
      };
    },
    mounted() {
      const $optionWeight = this.$refs.optionWeight;
      document.addEventListener('click', (e) => {
        console.log('e.target2: ', e.target);
        if (
          !e.target.classList.contains('control_item') || !e.target.classList.contains('weight')
        ) {
          if (!e.target.classList.contains('input-weight')) {
            e.preventDefault();
            if ($optionWeight.classList.contains('show')) {
              $optionWeight.classList.remove('show');
            }
          }
        }
      });

      this.inputWeight = this.$store.state.dog.weight;
    },
    watch: {
      inputWeight() {
        this.setWeight(this.inputWeight);
      }
    },
    methods: {
      handleWeightClick(e) {
        console.log('handleWeightClick: ', );
        if (e.target.classList.contains('input-weight')) {

        } else {
          if (this.$refs.optionWeight.classList.contains('show')) {
            this.$refs.optionWeight.classList.remove('show');
          } else {
            this.$refs.optionWeight.classList.add('show');
          }
        }
      },
      ...mapMutations('dog', [
          'setWeight'
        ])
    }
  }
</script>

<style lang="scss">

.options2 {
  .input-weight {
    position: absolute;
    text-align: center;
    top: 120px;
    left: 50%;
    right: 0;
    margin-left: -112px;
    padding: 12px;
    width: 200px;
    font-size: 30px;
  }
}
</style>
