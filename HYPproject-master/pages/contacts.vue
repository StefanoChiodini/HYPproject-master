<template>
  <div>
    <img class="img" src="~/assets/images/bologna_events.jpg" alt="" />
    <Breadcrumbs />
    <div class="box">
      <div class="textbox">
        <h1>Contatti</h1>
        <h2>Per qualsiasi informazione, non esitare a contattarci.</h2>
        <div class="text">
          <p>
            <strong
              >Comune di Bologna, Piazza Maggiore, 6 - 40124 Bologna</strong
            >
          </p>
          <p><strong>P.Iva: </strong>01232710374</p>
          <p><strong>Cod. IBAN: </strong>IT 88 R 02008 02435 000020067156</p>
          <p><strong>Telefono: </strong>051 203040</p>
          <p><strong>PEC: </strong>protocollogenerale@pec.comune.bologna.it</p>
        </div>
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
      title: 'Contatti - Comune di Bologna',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `In questa pagina puoi trovare tutte le informazioni per metterti in contatto con noi.`,
        },
        { name: 'keywords', content: 'Bologna, Italia, Contatti Bologna, Mail Bologna, PEC Bologna, Email Bologna, IBAN Bologna'}
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
h1 {
  font-size: 2.5rem;
  font-weight: 700;
}
h3 {
  color: grey;
  font-weight: 400;
}
p {
  font-size: 1rem;
  font-weight: 300;
}
.box {
  display: flex;
  flex-wrap: nowrap;
}
.text {
  margin-top: 3em;
  line-height: 1em;
}
strong {
  font-weight: 700;
}

@media (min-width: 10em) {
  .box {
    padding: 2rem 1rem;
  }
}
@media (min-width: 40em) {
  .box {
    padding: 2rem 3rem;
  }
}
</style>
