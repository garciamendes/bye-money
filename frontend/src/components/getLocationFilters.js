// Third party
import { forEach, has } from 'lodash'
import queryString from 'query-string'

export function getLocationFilters(location, filters) {
  const locationSearch = queryString.parse(location.search)
  const locationFilters = {}

  forEach(filters, (key) => {
    if (has(locationSearch, key)) locationFilters[key] = locationSearch[key]
  })

  return locationFilters
}