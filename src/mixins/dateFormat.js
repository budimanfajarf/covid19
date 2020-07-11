export default {
  data() {
    return {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  methods: {
    fullDateWithHours(date) {
      const d = new Date(date);
      const months = this.months;      
      return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} · ${("0"+d.getHours()).slice(-2)}:${("0"+d.getMinutes()).slice(-2)}`;
    },
    fullDate(date) {
      const d = new Date(date);
      const months = this.months;
      return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
  }
}