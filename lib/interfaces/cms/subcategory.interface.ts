import { CreateSubcategory, UpdateSubcategory } from '../../types/cms';

/**
 * @Controller('cms/subcategory')
 *
 * @publicApi
 */
export interface SubcategoryController {
  /**
   * @Post()
   *
   * @param body
   * @returns
   */
  createSubcategory: (body: CreateSubcategory) => any;
  /**
   * @Patch(':id')
   *
   * @param id
   * @param body
   * @returns
   */
  updateSubcategory: (id: number | string, body: UpdateSubcategory) => any;
  /**
   * @Delete(':id')
   *
   * @param id
   * @returns
   */
  deleteSubcategory: (id: number | string) => any;
  /**
   * @Get('all')
   * @returns
   */
  getSubcategories: () => any;
  /**
   * @Get('slug/:slug')
   *
   * @param slug
   * @returns
   */
  getSubcategoryBySlug: (slug: string) => any;
  /**
   * @Get(':id')
   *
   * @param id
   * @returns
   */
  getSubcategoryById: (id: number | string) => any;
}
