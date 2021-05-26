const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '979810430',
          email: 'manuel@email.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '979810352',
          email: 'julie@email.com',
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
