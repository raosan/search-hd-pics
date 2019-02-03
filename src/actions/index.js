export const getPics = (term) => {
  return {
    type: 'PICS-FETCH',
    payload: term
  }
}