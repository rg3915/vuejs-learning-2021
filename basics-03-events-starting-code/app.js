const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      firstName: '',
      lastName: '',
      fullname: '',
    };
  },
  watch: {
    name(newValue) {
      if (newValue === '') {
        this.fullname = '';
      } else {
        this.fullname = newValue + ' ' + this.lastName;
      }
    },
    lastName(newValue) {
      if (newValue === '') {
        this.fullname = '';
      } else {
        this.fullname = this.name + ' ' + newValue;
      }
    },
  },
  // computed: {
  //   fullname() {
  //     if (this.name === '' || this.lastName === '') {
  //       return '';
  //     }
  //     return this.name + ' ' + this.lastName;
  //   },
  // },
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
