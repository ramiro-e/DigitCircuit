const path = require('path');

module.exports = {
    home: (req, res) => {
        res.render(path.resolve(__dirname, '../views/main/home'), {
            styles: ["header.css","home.css", "footer.css"],
            title: "DigitCircuit"
        })
    }
}