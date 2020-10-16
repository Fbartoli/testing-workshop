class Bob {
  hey(sentence) {
    const trimmedSentence = sentence.trim()
    if (this.isQuestionAllCaps(trimmedSentence)) return 'Calm down, I know what I\'m doing!'
    else if (this.isSentenceAllcaps(trimmedSentence)) return "Whoa, chill out!"
    else if (this.isQuestion(trimmedSentence)) return "Sure."
    else if (this.isEmpty(trimmedSentence)) return 'Fine. Be that way!'
    return "Whatever."
  }
  isQuestionAllCaps(sentence) {
    return this.isQuestion(sentence) && this.isSentenceAllcaps(sentence)
  }
  isSentenceAllcaps(sentence) {
    return sentence.toUpperCase() == sentence && /[a-zA-Z]/.test(sentence)
  }
  isQuestion(sentence) {
    return sentence.endsWith("?")
  }
  isEmpty(sentence) {
    return sentence.length == 0
  }
}

module.exports = { Bob }