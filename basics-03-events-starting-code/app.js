const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      firstName: '',
    };
  },
  computed:{
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Donald';
    }
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Donald';
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    },
    setName(event, lastName) {
      // this.name = event.target.value + ' ' + lastName;
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      // document.querySelector('input').value = '';
      this.name = '';
    },
  },
});

app.mount('#events');
