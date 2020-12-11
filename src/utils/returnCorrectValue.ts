const returnCorrectValue = (type: 'income' | 'outcome', value: string): string =>
  (type==='income' ? String(value) : String('- ' + value)) ;

export default returnCorrectValue;
