import type {
  CreateProductVariant,
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
  createProductVariant: (body: CreateProductVariant) => any;
  /**
   * @Delete(':article')
   *
   * @param article
   * @returns
   */
  deleteProductVariant: (article: number | string) => any;
  /**
   * @Get(':article')
   *
   * @returns
   */
  getProductVariantByArticle: (article: number | string) => any;
  /**
   * @Get()
   *
   * @returns
   */
  getProductVariants: () => any;
  /**
   * @Get('by-category/:id')
   *
   * @param id
   * @returns
   */
  getProductVariantsByCategory: (id: number | string) => any;
  /**
   * @Get('by-product/:id')
   *
   * @param id
   * @returns
   */
  getProductVariantsByProduct: (id: number | string) => any;
  /**
   * @Patch(':article')
   *
   * @param article
   * @param body
   * @returns
   */
  updateProductVariant: (
    article: number | string,
    body: UpdateProductVariant,
  ) => any;
  /**
   * @Patch('count/:article')
   *
   * @param article
   * @param body
   * @returns
   */
  updateProductVariantCount: (
    article: number | string,
    body: UpdateProductVariantCount,
  ) => any;
  /**
   * @Patch('price/:article')
   *
   * @param article
   * @param body
   * @returns
   */
  updateProductVariantPrice: (
    article: number | string,
    body: UpdateProductVariantPrice,
  ) => any;
  /**
   * @Patch('sale/:article')
   *
   * @param article
   * @param body
   * @returns
   */
  updateProductVariantSale: (
    article: number | string,
    body: UpdateProductVariantSale,
  ) => any;
}
