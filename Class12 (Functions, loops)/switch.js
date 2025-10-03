function chooseFavColor(color){
  let colorLower = color.toLowerCase(); 
  switch(colorLower){
    case 'red':
      console.log(`apple is ${color}`)
      break; 
    case 'green':
      console.log(`grass is ${color}`)
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

chooseFavColor('Green')
// chooseFavColor('blue')
// chooseFavColor('Yellow') 
// chooseFavColor('YELLOW') 