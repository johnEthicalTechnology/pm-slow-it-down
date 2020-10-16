function sleep(millis) {

  return new Promise(resolve => setTimeout(resolve, millis));

}

module.exports = async (req, res) => {
  try {
    console.log('req.body.time', req.body);

  const finished = await sleep(Number.parseInt(req.body.data));

  console.log('finished', finished);
  res.json({body: `Waited ${req.body.data} second`});
  } catch (error) {
    console.log('req', req);
    console.log('errors again', error)
  }

}
