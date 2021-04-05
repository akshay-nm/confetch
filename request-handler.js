const requestHandler = (response) => {
  if (response?.ok) return response.json()
  if (response.status) throw Error(`${response.status}`)
  throw Error('408')
}
