import type {
  CreateProduct,
  Product,
  ProductWithProductVariants,
  UpdateProduct,
} from '../../types/cms';

/**
 * @Controller('cms/product')
 *
 * @publicApi
 */
export interface ProductController {
  /**
   * @Post()
   *
   * @param body
   * @returns
   */
  createProduct: (body: CreateProduct) => Promise<Product>;

  /**
   * @Delete(':id')
   *
   * @param id
   * @returns
   */
  deleteProduct: (id: number | string) => Promise<Product>;

  /**
   * @Get(':id')
   *
   * @param id
   * @returns
   */
  getProductById: (
    id: number | string
  ) => Promise<Product | ProductWithProductVariants | null>;

  /**
   * @Get(slug/:slug)
   *
   * @param slug
   * @returns
   */
  getProductBySlug: (
    slug: string
  ) => Promise<Product | ProductWithProductVariants | null>;

  /**
   * @Get()
   *
   * @returns
   */
  getProducts: () => Promise<(Product | ProductWithProductVariants)[]>;

  /**
   * @Patch(':id')
   *
   * @param id
   * @param body
   * @returns
   */
  updateProduct: (id: number | string, body: UpdateProduct) => Promise<Product>;
}
