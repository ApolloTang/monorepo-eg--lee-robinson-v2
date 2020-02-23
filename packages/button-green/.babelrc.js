module.exports = (api) => {
  api.cache(true)


  console.log('xxx button-green .babelrc.js')
  const out = {
    // babelrcRoots: ['.'], // This does not to have any effect
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      'babel-plugin-styled-components'
    ]
  }

  return out
};
