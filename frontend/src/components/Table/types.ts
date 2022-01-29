// React
import { ReactNode } from 'react'

// Third party
import { PaginationProps } from 'semantic-ui-react'

// Project
import { IStateDefaultType } from '../../store/types'

export interface ITableFooterProps {
  colSpan: number,
  data: IStateDefaultType,
  onPageChange?: (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) => void
  className?: string,
  pageFilters?: Array<string>
}

export interface ITableBody {
  colSpan: number,
  children?: ReactNode,
}

export interface ITablebodyProps {
  colSpan: number,
  isLoading?: boolean,
  icon?: ReactNode,
  header?: string,
  subheader?: string,
  search?: string,
  data: IStateDefaultType,
  action?: ReactNode,
  children?: ReactNode
  sizeICons?: number,
}

export interface IBodyProps {
  colSpan: number,
  children: ReactNode
}

export interface IFiltersTableProps {
  search?: string,
  page?: string | number
}