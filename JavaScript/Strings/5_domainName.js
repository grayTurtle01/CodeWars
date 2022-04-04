function domainName(url){
  r = url.replace(/(https?:\/\/)/, '')
  r = r.replace(/(www\.)/, '')
  r = r.split('.')[0]
  
  return r
}
