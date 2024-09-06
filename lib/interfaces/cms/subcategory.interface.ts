import type {
  CreateSubcategory,
  Subcategory,
  UpdateSubcategory,
} from '../../types/cms';

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
  createSubcategory: (body: CreateSubcategory) => Promise<Subcategory>;

  /**
   * @Delete(':id')
   *
   * @param id
   * @returns
   */
  deleteSubcategory: (id: number | string) => Promise<Subcategory>;

  /**
   * @Get('all')
   * @returns
   */
  getAllSubcategories: () => Promise<Subcategory[]>;

  /**
   * @Get('by-category/:id')
   *
   * @param id
   * @returns
   */
  getSubcategoriesByCategory: (id: number | string) => Promise<Subcategory[]>;

  /**
   * @Get(':id')
   *
   * @param id
   * @returns
   */
  getSubcategoryById: (id: number | string) => Promise<Subcategory | null>;

  /**
   * @Get('slug/:slug')
   *
   * @param slug
   * @returns
   */
  getSubcategoryBySlug: (slug: string) => Promise<Subcategory | null>;

  /**
   * @Patch(':id')
   *
   * @param id
   * @param body
   * @returns
   */
  updateSubcategory: (
    id: number | string,
    body: UpdateSubcategory
  ) => Promise<Subcategory>;
}
