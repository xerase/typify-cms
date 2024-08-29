import type { CreatePromocode } from '@/lib';

/**
 * @Controller('cms/promocode')
 *
 * @publicApi
 */
export interface PromocodeController {
  /**
   * @Post()
   *
   * @param body
   * @returns
   */
  createPromocode: (body: CreatePromocode) => any;
  /**
   * @Delete(':code')
   *
   * @returns
   */
  deletePromocode: (code: string) => any;
  /**
   * @Get()
   *
   * @returns
   */
  getPromocodes: () => any;
}
