<template>
  <div class="container">
    <div class="grid__item child">
      <SmallCardsHome
        :img="`icon/itineraries_icon.png`"
        :title="`Itinerari`"
        :buttonsnippet="`Scopri gli itinerari`"
        :color="`red`"
        :link="`/itineraries`"
      />
    </div>
    <div class="grid__item child">
      <SmallCardsHome
        :img="`icon/event_icon.png`"
        :title="`Eventi`"
        :buttonsnippet="`Scopri gli eventi`"
        :color="`blue`"
        :link="`/events`"
      />
    </div>
    <div class="grid__item child">
      <SmallCardsHome
        :img="`icon/services_icon.png`"
        :title="`Servizi`"
        :buttonsnippet="`Scopri i servizi`"
        :color="`yellow`"
        :link="`/services`"
      />
    </div>
  </div>
</template>

<script>
import SmallCardsHome from './SmallCardsHome.vue'
export default {
  components: { SmallCardsHome },
}
</script>

<style>
.grid__item {
  border-radius: 3rem;
  transition: 0.2s;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: none;
  
}
.grid__item:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.3);
}

.container {
  display: grid;
  width: min(95%, 70rem);
  margin-inline: auto;
  padding-block: 2rem;
  grid-template-areas:
    'itineraries'
    'events'
    'services'
    'blank';
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.child:nth-child(1) {
  grid-area: itineraries;
}
.child:nth-child(2) {
  grid-area: events;
}
.child:nth-child(3) {
  grid-area: services;
}
@media (min-width: 10em) {
  .container {
    grid-template-areas: 
    'itineraries'
    'events'
    'services';
  }
}

@media (min-width: 60em) {
  .container {
    grid-template-areas:
      'itineraries events services'
      'itineraries events services'
      'itineraries events services';
  }
}
</style>
