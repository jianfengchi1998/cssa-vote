export * from './server'

export const getSingerIndex = (singers, singer) => (
  singers.map((s) => (
    s.id
  )).indexOf(singer)
)

export const chunk = (array, size) => {
  const chunkedArr = []
  let index = 0
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index))
    index += size
  }
  return chunkedArr
}
