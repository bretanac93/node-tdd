const peopleRepository = require('../repositories/people');

function handleErrors(res, error) {
  res.status(400).json({
    error: error.toString(),
  });
}

async function getAll(req, res) {
  try {
    const people = await peopleRepository.getAll();
    res.json({ data: people });
  } catch (error) {
    handleErrors(res, error);
  }
}

async function getOne(req, res) {
  try {
    const person = await peopleRepository.getOne(req.params.email);
    res.json({ data: person });
  } catch (error) {
    handleErrors(res, error);
  }
}

module.exports = {
  getAll,
  getOne,
};
