<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact />
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '980401553',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '970701553',
          email: 'julie@localhost.com',
        },
      ],
    };
  },
};
</script>

<style></style>
