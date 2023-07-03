import { BaseResponseInterface, MetaResponseInterface } from './BaseResponseInterface'

export type LanguageType = 'en' | 'id'
export interface PostBodyLoginInterface {
  email: string
  password: string
  lang: LanguageType
}
export interface UserAuthContextValueInterface {
  access_token: string
  refresh_token: string | null
}
export interface UserAuthInterface extends UserAuthContextValueInterface {
  expire_token: number | null
}

export interface ResponseLoginInterface extends UserAuthInterface, BaseResponseInterface {}

export interface PostBodyRefreshTokenInterface {
  token: string | undefined | null
}

export interface MeInterface {
  data: DataMeInterface
}
export interface UserCompaniesInterface {
  id: string
  isActive: boolean | null
  logo: string
  name: string
  slug: string
}

export interface DataMeInterface {
  id: string
  name: string
  firstName: string
  lastName: string
  phone: string
  profilePicture: string
  email: string
  hasPin: boolean
  permissions: Array<string>
  identityNumber: string
  lang: 'en' | 'id'
  companies: Array<UserCompaniesInterface>
}

export interface GetUserListFilterInterface {
  fullname?: string
  page?: number
  perPage?: number
  sort?: 'desc' | 'asc'
  sortBy?: string
}

export interface ResponseUserListInterface extends BaseResponseInterface {
  data: Array<UserInterface>
  meta?: MetaResponseInterface
}

export interface UserInterface {
  id: string
  identityNumber: string
  name: string
  firstName: string
  lastName: string
  phone: string
  profilePicture: string
  email: string
  hasPin: boolean
  fullName: string
  lang: string
}

export interface ChangePasswordErrorInterface {
  currentPassword: Array<string>
  newPassword: Array<string>
}

interface ChangePasswordBaseResponse {
  error: boolean
  message: ChangePasswordErrorInterface | string
}

export interface ResponseMeInterface extends MeInterface, BaseResponseInterface {}

export interface ChangePasswordParamsInterface {
  currentPassword: string
  newPassword: string
}

export interface ChangePasswordResponseInterface extends ChangePasswordBaseResponse {
  data: UserInterface
}

export interface DeleteUserParamsInterface {
  userId: string
  companyId: string
}

export interface ChangeLanguageInterface {
  lang: LanguageType
}

export interface UserDetailRequestInterface {
  userId: string
}

export interface UserDetailResponseInterface extends DataMeInterface {
  roles: Array<string>
  fullName: string
  teamNames: string
}
