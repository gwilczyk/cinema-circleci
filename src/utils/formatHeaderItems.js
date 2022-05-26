const formatHeaderItems = (item) =>
  item
    .split('_')
    .map((elt) => elt[0].toUpperCase() + elt.slice(1).toLowerCase())
    .join(' ')

export default formatHeaderItems
