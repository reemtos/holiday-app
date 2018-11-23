<template>
  <div id="home" class="home">
    <Header />
    <section class="section section__hero" v-bind:style="styles">
      <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
          <source v-bind:src="videoMp4" type="video/mp4">
          <source v-bind:src="videoWebm" type="video/webm">
          Your browser is not supported.
        </video>
      </div>
      <div class="intro-section text-center">
        <div class="container mini">
          <h1 class="heading-primary intro-phrase">Spend your holiday appropriately with your loved ones.</h1>
          <h4 class="heading-tertiary intro-paraphrase">You decide when, we help with where.</h4>
          <router-link to="/" v-scroll-to="'#packagesSection'" class="button button--intro">
            Available Options
          </router-link>
        </div>
      </div>
    </section>
    <section id="packagesSection" class="section section__packages text-center">
      <div class="container mini">
        <h3 class="heading-secondary mb-small">Two awesome packages for your holiday needs.</h3>
        <p class="paragraph big text-dark-quiet">Whether it’s a family vacation, a romantic getaway, or you just want to cool off somewhere, we’ve got the perfect packages.</p>
      </div>
      <div class="container">
        <div class="packages">
          <div class="package" v-for="singlePackage in packages" v-bind:key="singlePackage.id">
            <h3 class="heading-tertiary mb-small">{{singlePackage.name}} Area</h3>
            <Features v-bind:items="singlePackage.features" />
            <router-link :to="{ name: 'package', params: { packageName: singlePackage.identifier }}" class="button full-width mt-medium">
              Book {{singlePackage.name}} Area
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="section section__faq">
      <div class="container">
        <h3 class="heading-secondary text-center mb-small">Questions about packages</h3>
        <FAQ v-bind:lists="faqList" />
      </div>
    </section>
    <section class="section section__testimonial text-center">
      <div class="container mini">
        <h3 class="heading-secondary mb-small">We make people genuinely happy.</h3>
      </div>
      <div class="container">
        <Testimonials v-bind:testimonies="testimonies" />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header'
import FAQ from '../components/faq'
import Features from '../components/features'
import Footer from '../components/footer'
import Testimonials from '../components/testimonials'
import bgVideoMp4 from '../assets/videos/pool.mp4'
import bgVideoWebm from '../assets/videos/pool.webm'
import userFemale from '../assets/images/user-female.png'
import userMale from '../assets/images/user-male.png'
import AvailablePackages from '../data/data.packages'
import FAQList from '../data/data.faq'
import Testimonies from '../data/data.testimonies'
export default {
  name: 'Home',
  data () {
    return {
      styles: {
        'background-image':
          'linear-gradient( to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) )'
      },
      faqList: [...FAQList],
      testimonies: [...Testimonies],
      packages: [...AvailablePackages],
      userF: userFemale,
      userM: userMale,
      videoMp4: bgVideoMp4,
      videoWebm: bgVideoWebm
    }
  },
  components: {
    Header,
    FAQ,
    Features,
    Footer,
    Testimonials
  }
}
</script>
