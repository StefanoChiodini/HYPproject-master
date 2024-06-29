<template>
  <div class="body">
    <div class="navbarbox">
      <NuxtLink to="/" class="title">Bologna</NuxtLink>
      <div class="childnav">
        <ul class="nav-links">
          <li @click="navSlide">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          </li>
          <li @click="navSlide">
            <NuxtLink to="/explore" class="nav-link">Scopri la città</NuxtLink>
          </li>
          <li @click="navSlide">
            <NuxtLink to="/itineraries" class="nav-link">Itinerari</NuxtLink>
          </li>
          <li @click="navSlide">
            <NuxtLink to="/events" class="nav-link">Eventi</NuxtLink>
          </li>
          <li @click="navSlide">
            <NuxtLink to="/services" class="nav-link">Servizi</NuxtLink>
          </li>
        </ul>
        <div class="burgerbox" @click="navSlide">
          <div class="burger">
            <div class="line one"></div>
            <div class="line two"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    
    navSlide(event) {
      const nav = document.querySelector('.nav-links')
      const one = document.querySelector('.one')
      const two = document.querySelector('.two')
      const burger = document.querySelector('.burger')
      nav.classList.toggle('active')
      one.classList.toggle('oneactive')
      two.classList.toggle('twoactive')
      burger.classList.toggle('burgeractive')
    },
  },
}
</script>

<style scoped>
.one.oneactive {
  transform: rotate(45deg) translateX(3px) translateY(2px);
  align-items: center;
}
.two.twoactive {
  transform: rotate(-45deg) translateX(3px) translateY(-2px);
  align-items: center;
}
.burger.burgeractive {
  justify-content: center;
  align-items: center;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  background-color: black;
  backdrop-filter: blur(8px);
  height: auto;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  opacity: 0.9;
}
.navbarbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  opacity: 1;
}
.title {
  font-size: 2rem;
  font-weight: 700;
  align-content: center;
  text-decoration: none;
  color: white;
  margin-left: 1rem;
  margin-right: 2rem;
  white-space: nowrap;
}
.childnav {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  z-index: 99;
  margin: 2rem;
}
.nav-links {
  display: flex;
  z-index: 98;
  background-color: black;
  list-style-type: none;
  align-items: center;
  transition: 0.5s;
}
.nav-links li {
  list-style: none;
  border-radius: 1rem;
}
li:hover {
  color: rgb(187, 64, 34);
  transition: 0.2s;
}
.nav-link {
  color: white;
  text-decoration: none;
  text-align: center;
  margin: 0rem 1rem;
  white-space: nowrap;
}
.nav-link:hover {
  color: rgb(187, 64, 34);
  transition: 0.2s;
  text-decoration: double;
}
.line {
  margin: 4px;
  background-color: white;
  width: 20px;
  height: 3px;
  border-radius: 5rem;
  transition: 0.5s;
}
.burger {
  display: none;
  margin-right: 0;
  cursor: pointer;
}

.nav-links.active {
  transform: translateX(0%);
  -ms-transform: translateX(0%);
  -webkit-transform: translate3d(0%, 0%, 0%);
  -moz-transform: translateX(0%);
  -o-transform: translateX(0%);
  opacity: 1;
  transition: 0.5s;
}

@media (max-width: 40em) {
  .nav-links {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;
    transform: translateX(100%);
    -ms-transform: translateX(100%);
    -webkit-transform: translate3d(100%, 0, 0);
    -moz-transform: translateX(100%);
    -o-transform: translateX(100%);
    opacity: 0;
  }
  .burger {
    display: block;
  }
  .burgerbox {
    float: right;
    padding: 10px 15px;
    border-radius: 20rem;
    background-color: rgb(187, 64, 34);
    cursor: pointer;
  }
  li {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    text-align: center;
  }
  .title {
    font-size: 1.5rem;
    margin-right: 1.5rem;
  }
  .nav-links.active {
  transform: translateX(0%);
  -ms-transform: translateX(0%);
  -webkit-transform: translate3d(0%, 0%, 0%);
  -moz-transform: translateX(0%);
  -o-transform: translateX(0%);
  opacity: 1;
  transition: 0.5s;
}
}
</style>
