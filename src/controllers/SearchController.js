const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
  async index(request, response) {
    // console.log(request.query);

    //buscar todos dev em um raio de 10km
    //filtrar tecnologias
    const { latitude, longitude, techs } = request.query;

    const techsArray = ParseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return response.json({ devs })
  }
}