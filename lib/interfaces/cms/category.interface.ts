import { CreateCategory, UpdateCategory } from '../../types/cms';

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
  createCategory: (body: CreateCategory) => any;
  /**
   * @Patch(':id')
   *
   * @param id
   * @param body
   * @returns
   */
  updateCategory: (id: number | string, body: UpdateCategory) => any;
  /**
   * @Delete(':id')
   *
   * @param id
   * @returns
   */
  deleteCategory: (id: number | string) => any;
  /**
   * @Get()
   *
   * @returns
   */
  getCategories: () => any;
  /**
   * @Get(':id')
   *
   * @param id
   * @returns
   */
  getCategoryById: (id: number | string) => any;
}
