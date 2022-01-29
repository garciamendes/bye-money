export interface IStateDefaultType {
  page_number: number,
  count: number,
  begin: number,
  end: number,
  first: number,
  previous: number | null,
  has_next: boolean | null,
  next: number | null,
  has_prev: boolean | null,
  last: string | number,
  num_pages: number,
  results: Array<object> | object
}