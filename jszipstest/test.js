const { zip, unzip } = require("@publishvue/jszips")

zip("Hello World").then(zipped => {
  console.log("zipped", zipped)

  unzip(zipped).then(unzipped => {
    console.log("unzipped", unzipped)
  })
})