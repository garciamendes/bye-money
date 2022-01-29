// React
import React from 'react'
import { useHistory, useLocation } from 'react-router'

// Third party
import {
  Icon,
  Pagination,
  Table,
  Grid,
  PaginationProps
} from 'semantic-ui-react'
import { isEmpty, isUndefined } from 'lodash'
import queryString, { ParsedQuery } from 'query-string'
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight
} from 'react-icons/fa'
import { AiOutlineEllipsis } from 'react-icons/ai'

// Project
import { getLocationFilters } from '../getLocationFilters'

// Local
import { ITableFooterProps, IFiltersTableProps } from './types'
const sizeIconFooter = 15

export function TableFooter({ colSpan, data, onPageChange, className, pageFilters }: ITableFooterProps) {
  // Hooks
  const history = useHistory()
  const location = useLocation()

  // Others
  let filters: IFiltersTableProps
  filters = getLocationFilters(location, pageFilters) as IFiltersTableProps

  const onPageChangeDefault = (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) => {
    filters['page'] = data.activePage
    history.replace({ search: queryString.stringify(filters as ParsedQuery) })
  }

  return (
    <Table.Footer className={className}>
      <Table.Row>
        <Table.HeaderCell colSpan={2}>
          <Grid>
            <Grid.Column>
              <span className='footer-results'>
                <span>
                  Total: <span className='current_page'>{data.begin}</span>/<span className='total_page'>{data.count}</span>
                </span>
              </span>
            </Grid.Column>
          </Grid>
        </Table.HeaderCell>
        <Table.HeaderCell colSpan={colSpan} floated='right' textAlign='right'>
          {!isEmpty(data.results) && (
            <Pagination
              defaultActivePage={data.page_number}
              onPageChange={isUndefined(onPageChange) ? onPageChangeDefault : onPageChange}
              totalPages={data.num_pages}
              ellipsisItem={{ content: <AiOutlineEllipsis size={sizeIconFooter} />, icon: true }}
              firstItem={{ content: <FaAngleDoubleLeft size={sizeIconFooter} />, icon: true }}
              lastItem={{ content: <FaAngleDoubleRight size={sizeIconFooter} />, icon: true }}
              nextItem={{ content: <FaAngleRight size={sizeIconFooter} />, icon: true }}
              prevItem={{ content: <FaAngleLeft size={sizeIconFooter} />, icon: true }} />
          )}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  )
}