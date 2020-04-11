<template>
  <div class="home">
    <count1></count1> <br>
    <count2></count2>
  </div>
</template>

<script>
// @ is an alias to /src
import Count1 from './Count1'
import Count2 from './Count2'

export default {
  name: 'Home',
  components: {
    Count1,
    Count2
  }
}
</script>
