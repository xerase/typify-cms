import {
  CreateProductVariant,
  UpdateProductVariant,
  UpdateProductVariantCount,
  UpdateProductVariantPrice,
  UpdateProductVariantSale,
} from '../../types/cms';

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
   * @Delete(':article')
   *
   * @param article
   * @returns
   */
  deleteProductVariant: (article: number | string) => any;
  /**
   * @Get()
   *
   * @returns
   */
  getProductVariants: () => any;
  /**
   * @Get(':article')
   *
   * @returns
   */
  getProductVariantByArticle: (article: number | string) => any;
}
