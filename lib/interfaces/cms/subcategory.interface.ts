import type { CreateSubcategory, UpdateSubcategory } from '@/lib';

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
   * @Get(':id')
   *
   * @param id
   * @returns
   */
  getSubcategoryById: (id: number | string) => any;
  /**
   * @Get('slug/:slug')
   *
   * @param slug
   * @returns
   */
  getSubcategoryBySlug: (slug: string) => any;
  /**
   * @Patch(':id')
   *
   * @param id
   * @param body
   * @returns
   */
  updateSubcategory: (id: number | string, body: UpdateSubcategory) => any;
}
