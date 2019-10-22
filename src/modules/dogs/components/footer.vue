<template>
  <div class="footer">
    <div class="copyright">© 2019 Rain Lin Rights Reserved</div>
  </div>
</template>

<script>
  export default {
    name: 'footers'
  }
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: block;
  margin-top: -40px;
  background-color: #042F4B;
  width: 100%;
  height: 40px;
}

.copyright {
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  font-size: 15px;
  color: #fff6da;
  transform: translateY(-50%);
}


</style>
