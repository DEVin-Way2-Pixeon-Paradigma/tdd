/**
 * Formas de testar
 * adicinar arquivos na __tests__
 * criar um arquivo com extensão .spec.js ou test.js
 */
import { filterByTerm } from '../util/filterByTerm';

describe('Filter function', () => {
  it('should filter by a search term', () => {

    //Entrada
    const inputArr = [
      { id: 1, name: "Maça"},
      { id: 2, name: "Laranja"},
      { id: 3, name: "Limão"},
      { id: 4, name: "Melão"},
    ]
  
    // Retorno esperado
    const output = [{ id: 2, name: "Laranja"}];
  
    // Validação se o retorno está correto
    expect(filterByTerm(inputArr, "ra")).toEqual(output);
  
    expect(filterByTerm(inputArr, "RA")).toEqual(output);
  
  })
  
  it('should filter by a search term with another array', () => {
    const inputArray = [
      {id: 1, url: 'http://www.devinhouse.tech'},
      {id: 2, url: 'http://www.senai.com'},
    ]
  
    const output = [{id: 2, url: 'http://www.senai.com'}];
  
    expect(filterByTerm(inputArray, "senai", 'url')).toEqual(output);
  
  })

  it('should throw an error with empty array', () => {
    expect(() => filterByTerm([], 'teste', 'url')).toThrowError('inputArray cannot be empty');
  })
  
})



