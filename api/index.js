function sleep(millis) {

  return new Promise(resolve => setTimeout(resolve, millis));

}

module.exports = async (req, res) => {
  try {
    console.log('req.body.time', req.body.time);

  const finished = await sleep(Number.parseInt(req.body.time));

  console.log('finished', finished);
  res.json({body: `Waited ${req.body.time} second`});
  } catch (error) {
    console.log('error', error)
  }

}
