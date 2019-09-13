export * from './server'

export const getSingerIndex = (singers, singer) => (
  singers.map((s) => (
    s.id
  )).indexOf(singer)
)
