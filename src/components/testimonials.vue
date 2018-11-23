<template>
    <div class="testimonials">
        <div class="testimonial" v-for="testimony in testimonies" v-bind:key="testimony.id">
            <h4 class="heading-tertiary mb-small">“{{ testimony.title }}”</h4>
            <p class="paragraph">{{ testimony.message }}</p>
            <div class="person">
                <div class="avatar-box">
                    <img v-bind:src="testimony.person === 'M' ? userMale : userFemale" class="avatar" />
                </div>
                <h4 class="heading-tertiary name">{{ testimony.name }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import avatarFemale from '../assets/images/user-female.png'
import avatarMale from '../assets/images/user-male.png'
export default {
  name: 'Testimonials',
  data () {
    return {
      userMale: avatarMale,
      userFemale: avatarFemale
    }
  },
  props: ['testimonies']
}
</script>
