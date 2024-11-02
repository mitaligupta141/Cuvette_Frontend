function getFirstTwoLettersOfEmail(email) {
  const atIndex = email.indexOf('@');
  
  if (atIndex === -1) {
    return '';
  }
  
  return email.slice(0, Math.min(2, atIndex));
}
export default getFirstTwoLettersOfEmail;
