

function findMatching(bobby, jake) {
    return bobby.filter( possibleMatch =>
      possibleMatch.toLowerCase() === jake.toLowerCase()
    )
  }
  
  function fuzzyMatch(john, words) {
    return john.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(words.toLowerCase()) === 0
    )
  }
  
  function matchName(jerry, larry) {
    return jerry.filter( record => record.name === larry)
  }