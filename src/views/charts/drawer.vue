<template>
  <drawer class="breadcrumb-container" />
</template>
  
<script>
  import Drawer from '@/components/Drawer'

  export default {
    components: {
    Drawer
    },
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>