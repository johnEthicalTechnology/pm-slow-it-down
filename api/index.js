function sleep(millis) {

  return new Promise(resolve => setTimeout(resolve, millis));

}

module.exports = async (req, res) => {
  let parsed
  try {
    // parsed = JSON.parse(req.parser)

    console.log('req', req.query);
    console.log('req.body', req.body);
    console.log('req.parser', req.parser);

  await sleep(Number.parseInt(req.body));

  // res.json({body: `Waited ${parsed} second`});
  } catch (error) {
    console.log('req', req.parser);
    console.log('parsed', req.body);
    console.log('errors again', error)
  }

}
