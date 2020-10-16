function sleep(millis) {

  return new Promise(resolve => setTimeout(resolve, millis))

}

module.exports = async (req, res) => {
  // try {


  // } catch (error) {
  //   console.log('errors', error)
  // }
  console.log('Timeout length', req.query.time)
  await sleep(Number.parseInt(req.query.time))

  res.json({body: `Waited ${req.query.time / 1000} second`, responseCode: 200})
}
