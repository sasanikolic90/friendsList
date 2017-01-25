import some from 'lodash/some';

export function containsString(parent, child) {
  return parent.indexOf(child) !== -1;
}

export const compareAllCases = (str1, str2) =>  {
  return containsString(str2, str1) || containsString(str2.toLowerCase(), str1.toLowerCase());
}

export const isInArray = (props, searchText) => searchText === '' ? true : some(props, prop => compareAllCases(searchText, prop));
