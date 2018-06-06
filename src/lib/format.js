export default {
  toSentenceCase(string) {
    return string
      .charAt(0)
      .toUpperCase()
      .concat(string.substr(1, string.length));
  }
};
