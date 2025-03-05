import type { VerticalNavItems } from '@layouts/types'
import menu from './menu_main'
import menu_mr from './menu_mr'
import menu_src from './menu_src'
import menu_wos from './menu_wos'

export default [...menu, ...menu_mr, ...menu_wos, ...menu_src] as VerticalNavItems
