'use strict'


function dogs (axios) {
        return (req, res) => {
            axios.get('https://dog.ceo/api/breeds/image/random')
                 .then( output => {
                    res.status(200).send(output.data)
                 }
            )
            .catch(err => {
                res.status(500).send()
            })
            
        }
}

module.exports = dogs;