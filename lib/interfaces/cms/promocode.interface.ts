import type { CreatePromocode, PromocodeAllInfo } from '@/lib';

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
  createPromocode: (body: CreatePromocode) => Promise<PromocodeAllInfo>;

  /**
   * @Delete(':code')
   *
   * @returns
   */
  deletePromocode: (code: string) => Promise<PromocodeAllInfo>;

  /**
   * @Get()
   *
   * @returns
   */
  getPromocodes: () => Promise<PromocodeAllInfo[]>;
}
