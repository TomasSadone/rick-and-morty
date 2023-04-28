const axios = require('axios');

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      data: { name, gender, species, origin, image, status },
    } = await axios(`https://rickandmortyapi.com/api/character/${id}`);

    if (!name) throw new Error(`ID: ${id} not found`);
    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status,
    };
    return res.json(character);
  } catch (error) {
    return error.message.includes('ID')
      ? res.status(404).send(error.message)
      : res.status(500).json(error.response.data.error);
  }
};

module.exports = { getCharById };
