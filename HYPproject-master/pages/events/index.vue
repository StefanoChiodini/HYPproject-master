<template>
  <div>
    <img
      class="img"
      src="~/assets/images/bologna_events.jpg"
      alt="Centro storico Bologna"
    />
    <Breadcrumbs />
    <LargeCardHome
      :title="`Non perderti gli eventi di questa città.`"
      :snippet="`Città ricca di storia e contemporaneamente al passo con i tempi per quanto riguarda mostre, concerti, proiezioni, esibizioni e tanto altro.`"
      :img="`/icon/event_icon.png`"
      :altimg="`Event icon`"
    />
    <hr />
    <h2>Scopri di più</h2>
    <p>Scopri quali eventi ti aspettano!</p>
    <div class="filter-container">
      <button id="all" class="button child fil" @click="filterAll">
        Tutti gli eventi
      </button>
      <button id="summer" class="button child fil" @click="filterSummer">
        Eventi estivi
      </button>
      <button id="winter" class="button child fil" @click="filterWinter">
        Eventi invernali
      </button>
    </div>
    <h3 id="filter">Tutti gli eventi</h3>
    <div class="grid-layout">
      <TileNew
        v-for="sel of selected"
        :id="sel.pointOfInterestId"
        :key="sel.eventId"
        :img="sel.eventImage"
        :title="sel.eventName"
        :snippet="sel.eventDescription"
        :address="sel.eventAddress"
        :time="sel.eventDate"
        :buttonsnippet="`Scopri di più`"
        :link="`/events/`+ sel.eventId"
      />
    </div>
  </div>
</template>

<script>
import LargeCardHome from '../../components/LargeCardHome.vue'
import TileNew from '~/components/TileNew.vue'
export default {
  components: { LargeCardHome, TileNew },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/eventList')
    return {
      allEventList: data,
      selected: data,
    }
  },
  data() {
    return {
      allEventList: [],
      selected: [],
    }
  },
  head() {
    return {
      title: 'Eventi - Comune di Bologna',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Ecco quali sono gli eventi in calendario più importanti che accoglierà la città di Bologna.`,
        },
        { name: 'keywords', content: 'Bologna, Italia, Eventi Bologna, Concerto Ucraina Bologna, Avenia Bologna, Film Bologna, Tecnologia Bologna'}
      ],
    }
  },
  methods: {
    filterAll(event) {
      const filter = document.getElementById('filter')
      const buttonAll = document.getElementById('all')
      const buttonSummer = document.getElementById('summer')
      const buttonWinter = document.getElementById('winter')

      buttonAll.style.opacity = '1'
      buttonSummer.style.opacity = '0.7'
      buttonWinter.style.opacity = '0.7'

      filter.textContent = 'Tutti gli eventi'
      if (this.selected.length !== this.allEventList.length) {
        this.selected = []
        for (event of this.allEventList) {
          this.selected.push(event)
        }
      }
    },
    filterSummer(event) {
      const filter = document.getElementById('filter')
      const buttonAll = document.getElementById('all')
      const buttonSummer = document.getElementById('summer')
      const buttonWinter = document.getElementById('winter')

      buttonAll.style.opacity = '0.7'
      buttonSummer.style.opacity = '1'
      buttonWinter.style.opacity = '0.7'

      filter.textContent = 'Eventi estivi'
      this.selected = []
      for (event of this.allEventList) {
        if (event.eventSeasonFilter === 0) {
          this.selected.push(event)
        }
      }
    },
    filterWinter(event) {
      const filter = document.getElementById('filter')
      const buttonAll = document.getElementById('all')
      const buttonSummer = document.getElementById('summer')
      const buttonWinter = document.getElementById('winter')

      buttonAll.style.opacity = '0.7'
      buttonSummer.style.opacity = '0.7'
      buttonWinter.style.opacity = '1'

      filter.textContent = 'Eventi invernali'
      this.selected = []
      for (event of this.allEventList) {
        if (event.eventSeasonFilter === 1) {
          this.selected.push(event)
        }
      }
    },
  },
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 30rem;
  object-fit: cover;
}

.button {
  opacity: 0.7;
  border-radius: 20rem;
  background-color: rgb(187, 64, 34);
  color: white;
  transition: 0.5s;
  border: none;
}

.a .button:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.3);
}

.filter-container {
  display: grid;
  grid-template-areas:
    'all'
    'summer'
    'winter'
    'blank';
  gap: 1rem;
  padding-block: 2rem;
  margin-inline: auto;
}

.child:nth-child(1) {
  grid-area: all;
}

.child:nth-child(2) {
  grid-area: summer;
}

.child:nth-child(3) {
  grid-area: winter;
}

hr {
  width: 90%;
  justify-content: center;
}

h2 {
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  margin-top: 3rem;
}

h3 {
  text-align: center;
  margin-top: 1rem;
}

p {
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: black;
  margin: 0rem 7rem;
}

#all{
  opacity: 1;
}

@media (min-width: 10em) {
  .filter-container {
    grid-template-areas:
      'all summer'
      'all winter';
    justify-content: center;
  }

  .button {
    font-weight: 700;
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
  }

  p {
    margin: 0rem 1rem;
  }
  .grid-layout {
    display: grid;
    gap: 2em;
    padding-block: 2rem;
    width: 80%;
    margin-inline: auto;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
  .fil {
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 0.5rem
  }
}

@media (min-width: 50em) {
  .filter-container {
    grid-template-areas: 'all summer winter';
    justify-content: center;
    margin: 0rem 5rem;
  }

  .button {
    font-weight: 700;
    font-size: 1rem;
    padding: 1em 2em;
  }

  p {
    margin: 0rem 7rem;
    font-size: 1.5rem;
  }
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
