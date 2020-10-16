function sleep(millis) {

  return new Promise(resolve => setTimeout(resolve, millis));

}

module.exports = async (req, res) => {

  await sleep(Number.parseInt(req.body.time));

  res.json({body: `Waited ${req.body.time} second`});

}
