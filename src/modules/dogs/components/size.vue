<template>
  <div @click="handleSizeClick" class="control_item size">
    <i class="item_icon fas fa-dog"></i>
    <p class="item_text">{{ $t("message.dog.size")}}</p>
    <div class="options" ref="optionSize">
      <figure @click="handleClickSizeS" class="size size-s">
        <span class="size-text">{{ $t("message.dog.sizeThin") }}</span>
      </figure>
      <figure @click="handleClickSizeM" class="size size-m">
        <span class="size-text">{{ $t("message.dog.sizePerfect") }}</span>
      </figure>
      <figure @click="handleClickSizeL" class="size size-l">
        <span class="size-text">{{ $t("message.dog.sizeFat") }}</span>
      </figure>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapMutations } from 'vuex';

  export default {
    name: 'size',
    data () {
      return {
        updateSize: 'fat'
      };
    },
    mounted() {
      const $optionSize = this.$refs.optionSize;
      document.addEventListener('click', (e) => {
        console.log('e.target: ', e.target);

        if (
          !e.target.classList.contains('control_item') || !e.target.classList.contains('size')
        ) {
          e.preventDefault();
          if ($optionSize.classList.contains('show')) {
            $optionSize.classList.remove('show');
          }
        }
      });
    },
    watch: {
      updateSize() {
        console.log(this.updateSize);
      }
    },
    methods: {
      handleSizeClick(e) {

        console.log('handleSizeClick: ', );

        if (this.$refs.optionSize.classList.contains('show')) {
          this.$refs.optionSize.classList.remove('show');
        } else {
          this.$refs.optionSize.classList.add('show');
        }
      },
      handleClickSizeS() {
        this.setSize('thin');
      },
      handleClickSizeM() {
        this.setSize('perfect');
      },
      handleClickSizeL() {
        this.setSize('fat');
      },
      ...mapMutations('dog', [
          'setSize'
        ])
    }
  }
</script>

<style lang="scss">
.item_icon,
.item_text,
.fas {
  &, &:before {
    pointer-events: none !important;
  }
}

.options {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  top: 100%;
  left: 50%;
  margin-left: -405px;
  width: 800px;
  height: 270px;
  background-color: #fff;
  box-shadow: 3px 3px 6px #eee, -3px 3px 6px #eee;
  transform: translateY(-10px);
  transition: all 300ms;



  &:after {
    position: absolute;
    display: block;
    content: '';
    top: -10px;
    left: 50%;
    margin-left: -5px;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #fff transparent;
  }

  &.show {
    pointer-events: all;
    opacity: 1;
    transform: translateY(0);
  }

  .size {
    position: relative;
    display: inline-block;
    opacity: 0.6;
    margin: 50px 0 0;
    padding: 0;

    width: 250px;
    height: 170px;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    transition: opacity 300ms;

    &.size-s {
      background-image: url('../assets/size_thin.jpg')
    }

    &.size-m {
      background-image: url('../assets/size_perfect.jpg')
    }

    &.size-l {
      background-image: url('../assets/size_fat.jpg')
    }

    &:hover {
      opacity: 1;
    }

    .size-text {
      position: absolute;
      top: -11px;
      margin-left: -11px;
    }
  }
}

</style>
