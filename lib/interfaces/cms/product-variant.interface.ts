import type {
  CreateProductVariant,
  ProductVariant,
  UpdateProductVariant,
  UpdateProductVariantCount,
  UpdateProductVariantPrice,
  UpdateProductVariantSale
} from '@/lib';

/**
 * @Controller('cms/product-variant')
 *
 * @publicApi
 */
export interface ProductVariantController {
  /**
   * @Post()
   *
   * @param body
   * @returns
   */
  createProductVariant: (body: CreateProductVariant) => Promise<ProductVariant>;

  /**
   * @Delete(':article')
   *
   * @param article
   * @returns
   */
  deleteProductVariant: (article: number | string) => Promise<ProductVariant>;

  /**
   * @Get(':article')
   *
   * @returns
   */
  getProductVariantByArticle: (article: number | string) => Promise<ProductVariant | null>;

  /**
   * @Get()
   *
   * @returns
   */
  getProductVariants: () => Promise<ProductVariant[]>;

  /**
   * @Get('by-category/:id')
   *
   * @param id
   * @returns
   */
  getProductVariantsByCategory: (id: number | string) => Promise<ProductVariant[]>;

  /**
   * @Get('by-product/:id')
   *
   * @param id
   * @returns
   */
  getProductVariantsByProduct: (id: number | string) => Promise<ProductVariant[]>;

  /**
   * @Patch(':article')
   *
   * @param article
   * @param body
   * @returns
   */
  updateProductVariant: (
    article: number | string,
    body: UpdateProductVariant
  ) => Promise<ProductVariant>;

  /**
   * @Patch('count/:article')
   *
   * @param article
   * @param body
   * @returns
   */
  updateProductVariantCount: (
    article: number | string,
    body: UpdateProductVariantCount
  ) => Promise<ProductVariant>;

  /**
   * @Patch('price/:article')
   *
   * @param article
   * @param body
   * @returns
   */
  updateProductVariantPrice: (
    article: number | string,
    body: UpdateProductVariantPrice
  ) => Promise<ProductVariant>;

  /**
   * @Patch('sale/:article')
   *
   * @param article
   * @param body
   * @returns
   */
  updateProductVariantSale: (
    article: number | string,
    body: UpdateProductVariantSale
  ) => Promise<ProductVariant>;
}
