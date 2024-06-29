<template>
  <div class="gridcontainer">
    <div class="grid">
      <div class="item imagebox child">
        <img src="~/assets/images/bologna_logo.png" alt="" />
        <p class="comune">Comune di Bologna</p>
      </div>
      <div class="item child creators">
        <h3 class="linktitle">Creators</h3>
        <p class="websiteLine">Website created by STELUM Group</p>
        <a href="https://github.com/MaxBuono/HYPproject" target="_blank"
          >Visit the GitHub Repository ↗</a
        >
      </div>
      <div class="item child quicklinks">
        <h2 class="linktitle">Links</h2>
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/explore" class="nav-link">Scopri la città</NuxtLink>
        <NuxtLink to="/itineraries" class="nav-link">Itinerari</NuxtLink>
        <NuxtLink to="/events" class="nav-link">Eventi</NuxtLink>
        <NuxtLink to="/services" class="nav-link">Servizi</NuxtLink>
        <NuxtLink to="/contacts" class="nav-link">Contatti</NuxtLink>
        <NuxtLink to="/aboutus" class="nav-link">About Bologna</NuxtLink>
      </div>
      <p class="copyright child">
        Copyright © 2022 All Rights Reserved by STELUM Group.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav-link {
  display: inline-block;
  padding: none;
  margin: none;
  align-content: left;
}
.nav-link:hover {
  color: rgb(187, 64, 34);
  transition: 0.2s;
  text-decoration: double;
}
.imagebox {
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
}
img {
  height: 5em;
  margin: 1rem;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
}
p,
a {
  color: rgba(255, 255, 255);
  font-size: 1rem;
  margin-bottom: 0rem;
}
.comune {
  text-align: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255);
}
h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 450;
}
.nav-link {
  color: rgba(255, 255, 255);
  font-size: 1rem;
  line-height: 1em;
}
.copyright {
  padding-bottom: 2rem;
  align-content: center;
  font-size: 0.8rem;
  color: grey;
}
.gridcontainer {
  opacity: 1;
  color: white;
  height: auto;
  margin-top: 6rem;
}
.grid {
  opacity: 0.9;
  display: grid;
  grid-template-areas:
    'comune'
    'creators'
    'quicklinks'
    'copyright'
    'blank';
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8393558106836485) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}

.item {
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem 0rem;
}

.child:nth-child(1) {
  grid-area: comune;
}
.child:nth-child(2) {
  grid-area: creators;
}
.child:nth-child(3) {
  grid-area: quicklinks;
}
.child:nth-child(4) {
  grid-area: copyright;
}

.websiteLine {
  margin-left: 0.3em;
  margin-right: 0.3em;
}

@media (min-width: 10em) {
  .grid {
    grid-template-areas:
      'comune comune'
      'quicklinks quicklinks'
      'creators creators'
      'copyright copyright';
  }
  .copyright {
    text-align: center;
    margin-top: 2rem;
  }
  .linktitle {
    align-items: center;
    text-align: center;
  }
  .imagebox {
    background-color: rgb(187, 64, 34);
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.8);
  }
  .creators {
    text-align: center;
    padding-top: 0;
  }

  a {
    text-align: center;
  }
  .nav-link {
    line-height: 2em;
  }
  .quicklinks {
    text-align: center;
    align-self: center;
  }
}
@media (min-width: 52em) {
  .grid {
    grid-template-areas:
      'comune quicklinks quicklinks'
      'creators quicklinks quicklinks'
      'creators copyright copyright';
  }
  .copyright {
    text-align: center;
  }
  .imagebox {
    background-color: rgb(187, 64, 34);
    border-top-right-radius: 20rem;
  }
  .creators {
    background-color: rgb(187, 64, 34);
    text-align: center;
  }
  .quicklinks {
    text-align: center;
    align-self: center;
  }
  a {
    text-align: center;
  }
  .nav-link {
    margin: 1rem;
  }
}
</style>
