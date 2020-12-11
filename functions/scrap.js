const https = require('https')

const url = 'https://www.unephraseducheckout.fr'

exports.handler = async () => {
  try {
    const res = await https.get(url)

    let data

    res.on('data', (chunk) => {
      data += chunk
    })

    res.on('end', () => {
      console.log(JSON.parse(data))
    })
    return {
      statusCode: 200,
      body: 'success' + data,
    }
  } catch (error) {
    console.log({ error })
    return {
      statusCode: 404,
      body: 'not found',
    }
  }
}
