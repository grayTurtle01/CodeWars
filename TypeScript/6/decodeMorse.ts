import { MORSE_CODE } from './preloaded';
export function decodeMorse(morseCode: string): string {
  let words:string[] = morseCode.split("   ")
  let message:string = ""
  
  for(let word of words){
    let letters:string[] = word.split(" ")
    for( let letter of letters ){
      if( letter != '')
        message += MORSE_CODE[letter]
    }
    message += " "  
  }

  return message.trim()
}
