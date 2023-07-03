export interface BaseResponseInterface {
  error: boolean
  message?: string
}

export interface MetaResponseInterface {
  current_page?: number
  from?: number
  path?: string
  per_page?: number
  to?: number
  total?: number
  last_page?: number
}

export interface ResourceListResponseInterface extends BaseResponseInterface {
  meta?: MetaResponseInterface
}

export type SortingType = 'asc' | 'desc'
