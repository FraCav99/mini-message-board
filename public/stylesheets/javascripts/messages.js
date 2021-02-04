var moment = require('moment');

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: moment()
          .startOf('hour' - 1)
          .fromNow(),
        title: "Hello everyone!"
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: moment()
          .startOf('hour' - 1)
          .fromNow(),
        title: "Today is a good day!"
    }
];

module.exports = messages;