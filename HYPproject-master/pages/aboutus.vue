<template>
  <div>
    <img
      class="img"
      src="~/assets/images/bologna_homepage.png"
      alt="Panoramica di Bologna"
    />
    <Breadcrumbs />
    <LargeCardHome
      :title="`About Bologna.`"
      :snippet="`Capoluogo della Città metropolitana e della regione Emilia Romagna, Bologna è situata tra le montagne dell'Appennino tosco-emiliano ed il cuore della Pianura Padana. Punto d’incontro tra nord e sud, tra est e ovest, da Bologna si raggiungono facilmente la Riviera Adriatica nonché Venezia, Firenze, Milano e Roma.`"
      :img="`/icon/homepage_icon.png`"
      :altimg="`Garisenda icon`"
    />
    <div class="box">
      <div class="text">
        <p>
          Città d’arte, cultura e commercio con un'efficiente struttura
          fieristica e una rinomata tradizione manifatturiera e motoristica,
          Bologna è nota per i quasi 40 km di portici, i più lunghi del mondo.
          Chiamata anche la “Dotta”, per via della sua antica Università, e la
          “Grassa” per la sua gastronomia, la città si fregia del titolo "Città
          creativa della Musica UNESCO" e vanta un centro storico medievale tra
          i più estesi e meglio conservati d’Europa, brulicante di locali,
          osterie, teatri e botteghe. Patria di grandi artisti tra cui Giorgio
          Morandi, Guido Reni, i Carracci, Guercino, Aspertini, il suo fascino
          ha catturato anche personaggi illustri come Mozart, Carducci, Dante,
          Rossini e il Nobel per la Fisica, Guglielmo Marconi.
        </p>
        <p>
          Con la sua arte e la sua storia Bologna sorprende il viaggiatore in
          tutte le stagioni, dalla festosa atmosfera dell’estate bolognese a
          quella magica delle illuminazioni natalizie. Un primo sguardo alla
          città non può che aversi dalla bella Piazza Maggiore dove palazzi
          medievali, testimoni della vivace vita pubblica e di un'intensa
          attività economica, si coniugano perfettamente con la modernità,
          conservando il loro fascino antico. Ne è l'esempio Palazzo D'Accursio,
          sede del Comune, all’interno del quale troviamo la moderna Biblioteca
          multimediale Salaborsa in stile liberty e gli scavi archeologici
          romani visibili da un moderno pavimento in vetro. Tra i simboli di
          Bologna si annoverano la Fontana del Nettuno del Giambologna e le
          torri medievali. Fra tutte, s’innalzano maestose le Due Torri, quella
          degli Asinelli (98 metri) e la sua “gemella” Garisenda (48 metri,
          citata nell'Inferno di Dante). L’Alma Mater Studiorum è la più antica
          Università d’occidente. La sua prima prestigiosa sede,
          l’Archiginnasio, si fregia di pareti dipinte con stemmi degli studenti
          e del Teatro Anatomico dove anticamente si svolgevano le lezioni di
          anatomia con tanto di dissezioni. Lungo le antiche vie e gli infiniti
          portici, una meraviglia del tutto inattesa sono poi i canali risalenti
          al XII secolo e visitabili anche nei percorsi sotterranei. Un ricco
          patrimonio di opere artistiche è racchiuso nei suoi numerosi Musei e
          Gallerie, così come nei molteplici edifici religiosi tra i quali
          primeggiano il Complesso di Santo Stefano; quello di San Domenico che
          custodisce l’arca marmorea con le spoglie del Santo, opera di Nicolò
          dall'Arca con sculture di Michelangelo, e infine Santa Maria della
          Vita, che vanta un altro capolavoro di Nicolò dall'Arca, il gruppo
          plastico della Pietà.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
export default {
  components: { Breadcrumbs },
  head() {
    return {
      title: 'About Bologna - Comune di Bologna',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `In questa pagina puoi trovare un breve racconto della storia di Bologna.`,
        },
        {
          name: 'keywords',
          content:
            'Bologna, Italia, Storia Bologna, About Bologna, Su Bologna',
        },
      ],
    }
  },
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 30rem;
  object-fit: cover;
}

.text {
  margin-top: 1rem;
  line-height: 2rem;
  color: black;
  justify-content: center;
}
.box {
  display: flex;
  width: min(75%, 90rem);
  margin: auto;
}

@media (min-width: 10em) {
  .text {
    font-size: 1rem;
    font-weight: 200;
  }
}
@media (min-width: 40em) {
  .text {
    font-size: 1.5rem;
    font-weight: 200;
  }
}
</style>
