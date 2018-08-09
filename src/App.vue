<template>
  <div id="app">
    <top id="top"></top>
    <main id="main">
      <router-view/>   
    </main>
    <foot id="foot"></foot>
     
  </div>
</template>


<script>

import top from '@/components/top'
import foot from '@/components/foot'

export default {
  name: 'App',
  components: {
    top,
    foot
  }
}
</script>

<style lang="less">

@import "./assets/base.less";
@import "./assets/common.less";

#app {
  display: grid;
  grid-template-columns: 12% auto 12%; // 3列 
  grid-template-rows: auto 1fr auto;   //3行 1fr空余全都要
  grid-template-areas: "top top top"
                       ".      main  ."
                       "foot foot foot";

  #top {
    grid-area: top;
    padding-left: 12%;
    padding-right: 12%;
  }

  #main {
    grid-area: main;
    padding: 20px 0;
  }

  #foot {
    grid-area: foot;
    padding-left: 12%;
    padding-right: 12%;
  }

}

@media (max-width: 768px) {
  #app {
    grid-template-columns: 10px auto 10px;

    #top, #foot {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

}



</style>