const path = require('path');

module.exports = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/login'), {
            styles: ["header.css","login.css", "footer.css"],
            title: "DigitCircuit"
        })
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/register'), {
            styles: ["header.css","register.css", "footer.css"],
            title: "DigitCircuit"
        })
    }
}