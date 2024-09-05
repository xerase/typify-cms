import type { Category, CategoryWithSubcategories, CreateCategory, UpdateCategory } from '@/lib';

/**
 * @Controller('cms/category')
 *
 * @publicApi
 */
export interface CategoryController {
  /**
   * @Post()
   *
   * @param body
   * @returns
   */
  createCategory: (body: CreateCategory) => Promise<Category>;

  /**
   * @Delete(':id')
   *
   * @param id
   * @returns
   */
  deleteCategory: (id: number | string) => Promise<Category>;

  /**
   * @Get()
   *
   * @returns
   */
  getCategories: () => Promise<CategoryWithSubcategories[]>;

  /**
   * @Get(':id')
   *
   * @param id
   * @returns
   */
  getCategoryById: (id: number | string) => Promise<CategoryWithSubcategories | null>;

  /**
   * @Patch(':id')
   *
   * @param id
   * @param body
   * @returns
   */
  updateCategory: (id: number | string, body: UpdateCategory) => Promise<Category>;
}
