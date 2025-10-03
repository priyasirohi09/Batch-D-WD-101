function chooseFavColor(color){
  switch(color){
    case 'red':
      console.log(`apple is ${color}`)
      break; 
    case 'green':
      console.log(`grass is ${color}`)
      break;
    case 'blue':
      console.log(`sky is ${color}`)
      break;
    case 'yellow':
      console.log(`sun is ${color}`)
      break;
    default: 
    console.log(`${color} not found`)
  }
}

chooseFavColor('red')
chooseFavColor('blue')