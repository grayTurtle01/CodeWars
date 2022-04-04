function songDecoder(song){
  r = song.replace(/(WUB)+/g, ' ')
  r = r.trim()
  console.log(r)
  return r
}

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")

