<template>
  <div>
    <img
      class="img"
      src="~/assets/images/bologna_homepage.png"
      alt="Panoramica di Bologna"
    />
    <LargeCardHome
      :title="`Bologna, una città tutta da scoprire.`"
      :snippet="`Bologna è un importante nodo di comunicazioni stradali e ferroviarie del nord Italia, situata in un'area in cui risiedono importanti industrie meccaniche, elettroniche e alimentari. È anche sede di prestigiose istituzioni culturali, economiche e politiche, e di uno dei più avanzati quartieri fieristici d'Europa.
        Nel 2000 è stata Capitale Europea della Cultura, mentre dal 2006 è Città Creativa per la Musica. Nel 2021 i suoi portici sono stati riconosciuti patrimonio dell'umanità dall'UNESCO.`"
      :buttonsnippet="`Scopri la città`"
      :img="`/icon/homepage_icon.png`"
      :link="`/explore`"
      :altimg="`Garisenda icon`"
    />
    <hr />  
    <div class="box">
      <h2>Scopri di più</h2>
      <p>
        Per scoprire di più, naviga il sito utilizzando la barra di navigazione
        in alto oppure aiutati cliccando uno tra i topic che vedi qui sotto.
      </p>
    </div>
    <SmallCardsDisplay />
  </div>
</template>

<script>
import SmallCardsDisplay from '../components/SmallCardsDisplay.vue'
import LargeCardHome from '~/components/LargeCardHome.vue'

export default {
  name: 'IndexPage',
  components: { LargeCardHome, SmallCardsDisplay },
  layout: 'default',
  head() {
    return {
      title: 'Comune di Bologna',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Pagina principale del sito del Comune di Bologna. In questa pagina puoi trovare i punti di interesse, gli itinerari, gli eventi e i servizi offerti.`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.box {
  margin: 0rem 2rem;
  justify-content: center;
}
hr {
  width: 90%;
  justify-content: center;
}
h2 {
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
}
p {
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: black;
}
.img {
  width: 100%;
  height: 30rem;
  object-fit: cover;
}
@media (min-width: 10em) {
  p {
    margin: 0rem 1rem;
  }
}

@media (min-width: 50em) {
  .box {
    margin: 0rem 5rem;
  }
  p {
    margin: 0rem 7rem;
    font-size: 1.5rem;
  }
}
</style>
