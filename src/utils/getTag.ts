export const getTag = (value: string) => {
  const arrTags: string[] = []
  const arrValue = value.split(' ')
  arrValue.forEach(e => {
    if (e[0] === '#') {
      arrTags.push(e.replace(/[.,!?$%&;:{}=_`~()]/g, ''))
    }
  })
  return arrTags
}