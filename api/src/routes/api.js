const server = require('express').Router();
const axios = require('axios');
const redis = require('redis');

const client = redis.createClient();

server.get('/search', function(req, res){

    var query = req.query.q;

    client.get(query, (err, resp) =>{
            if(resp){
                const result = JSON.parse(resp);
                return res.json(result);
            }
            else axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
                .then(resp =>{
                    var r = resp.data.results;
                    var array= [];

                    for (var i = 0; i < r.length; i++){
                        array.push({
                            id: r[i].id,
                            title: r[i].title,
                            image: r[i].thumbnail,
                            price: r[i].price,
                            stock: r[i].available_quantity,
                            sold: r[i].sold_quantity,
                            condition: r[i].condition
                        })
                    }
                    client.setex(query, 3600, JSON.stringify(array)); //lo guardo en el cache
                    
                    return res.json(array)
                } )
    })

})

module.exports = server;