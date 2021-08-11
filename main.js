let str = `
010-7768-6815
qkr8479@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`


console.log(
  str.match(/(?<=\@).{1,}/g)
)