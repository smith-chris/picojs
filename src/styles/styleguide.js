import styleguide from '!!sass-variable-loader!./styleguide.sass'

let result = {
  palette: Object.keys(styleguide)
    .filter(key =>  key.match(/p[0-9]{1,2}/))
    .map(key => styleguide[key])
}

export default result