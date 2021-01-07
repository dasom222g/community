export default {
  name: 'Common',
  methods: {
    test() {
      console.log('common test')
    },
    alert(...messages) {
      const title = []
      messages.forEach(message => {
        title.push(message + '<br/>')
      })
      kendo.alert(title).setOptions({
        title: false,
        width: 400,
        height: 150
      })
    },
    confirm(title, done, fail) {
      kendo.confirm(title).done(done).fail(fail)
    }
  }
}
