const missing = (c) => {
  console.log(`
        Constant ${c} is not defined in the environment.
        Please add ${c} to your enviroment to continue!
    `)
  process.exit(1)
}

module.exports = { missing }
