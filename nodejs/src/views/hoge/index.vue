<template>
  <div class="hoge">
    <HelloWorld msg="Hello!" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/hello-world.vue'

export default defineComponent({
  name: 'Hoge',
  components: { HelloWorld },
})
</script>
