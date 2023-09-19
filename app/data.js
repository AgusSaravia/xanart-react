export const navigation = [
  { name: 'Home', link: '#' },
  { name: 'Tattoos', link: '#' },
  { name: 'About', link: '#' },
  { name: 'Contact', link: '#' }
]

let hero_text = "Me especializo en X, desde el 20XX comence a tatuar persigo X y me gusta hacer X"
const firstN = "Alexander"
const surname = "Rodriguez"


const artist = [
  {
  name: firstN,
  surname: surname,
  links:{
    instagram:"https://www.instagram.com/xanart.tattoo/",
    telegram: " https://t.me/xxanxs"  
  }
}]
console.log(artist)
export {
  artist as ALEXANDER_DATA,
  hero_text,
  firstN,
  surname
}