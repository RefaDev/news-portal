export const prepareTitle = (val: string | undefined) => {
  const titleStart = (val: string| undefined) => {
    let title = val?.split(' ').slice(0, -1)
    return title?.join(' ')
  }
  const titleEnd = (val: string| undefined) => {
    let title = val?.split(' ')
    return title?.[title.length - 1]
  }
  return {
    titleStart: titleStart(val),
    titleEnd: titleEnd(val),
  }
}
