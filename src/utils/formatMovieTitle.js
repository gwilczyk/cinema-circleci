const formatMovieTitle = (title) => {
  const titleString = title.toLowerCase()
  return titleString.replace(/ /g, '-')
}

export default formatMovieTitle
