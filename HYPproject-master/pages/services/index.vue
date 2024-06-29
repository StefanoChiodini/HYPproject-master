<template>
  <div>
    <img
      class="img"
      src="~/assets/images/bologna_services.webp"
      alt="Centro commerciale Bologna"
    />
    <Breadcrumbs />
    <LargeCardHome
      :title="`Servizi`"
      :snippet="`Bologna è una città in continuo sviluppo nonostante abbia radici solide radicate fin dal Medioevo. Per questo motivo sono numerosi i servizi offerti dal Comune ai cittadini e ai milioni di turisti sia italiani che stranieri che ogni anno visitano questa città.`"
      :img="`/icon/services_icon.png`"
      :altimg="`Hours icon`"
    />
    <div class="grid-layout">
      <TileNew
        v-for="service of serviceTypeList"
        :key="service.serviceTypeId"
        :img="service.serviceTypeImage"
        :title="service.serviceTypeName"
        :snippet="service.serviceTypeDescription"
        :address="service.serviceTypeAddress"
        :time="service.serviceTypeTime"
        :phone="service.serviceTypePhone"
        :clickable="false"
      />
    </div>
  </div>
</template>

<script>
import LargeCardHome from '~/components/LargeCardHome.vue'
import TileNew from '~/components/TileNew.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
export default {
  components: { LargeCardHome, TileNew, Breadcrumbs },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/serviceTypeList')
    return {
      serviceTypeList: data,
    }
  },
  data() {
    return {
      serviceTypeList: [],
    }
  },
  head() {
    return {
      title: 'Servizi - Comune di Bologna',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Elenco dei principali servizi offerti dal comune di Bologna.`,
        },
        { 
          name: 'keywords',
          content: 'Bologna, Italia, Farmacia Bologna, Biblioteca Bologna, Discarica Bologna, Carrefour Bologna, Parcheggio Bologna'
        }
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

@media (min-width: 10em) {
  .grid-layout {
    display: grid;
    gap: 2em;
    padding-block: 2rem;
    width: 80%;
    margin-inline: auto;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
}
@media (min-width: 70em) {
  .grid-layout {
    display: grid;
    gap: 2em;
    padding-block: 2rem;
    width: 75%;
    margin-inline: auto;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
}
</style>
