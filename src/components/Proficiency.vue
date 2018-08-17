<template>
  <div class="sidebar-content skill">
    <span class="alignleft">{{ skill }}</span><span class="alignright">{{ proficiencies[proficiency] }}</span>
    <ProgressBar size="tiny" :val="10 * proficiency" bar-color="white" bg-color="#08253c"></ProgressBar>
  </div>
</template>

<script>
import ProgressBar from 'vue-simple-progress'

export default {
  name: 'Proficiency',
  components: {
    ProgressBar
  },
  props: ['skill', 'proficiency'],
  data: () => {
    return {
      proficiencies: {
        0: 'Beginner',
        1: 'Beginner',
        2: 'Novice',
        3: 'Novice',
        4: 'Novice',
        5: 'Competent',
        6: 'Competent',
        7: 'Proficient',
        8: 'Proficient',
        9: 'Expert',
        10: 'Expert'
      }
    }
  }
}

</script>

<style scoped>
.skill {
}
.alignleft {
  text-align: left;
}
.alignright {
  float: right;
}
</style>
