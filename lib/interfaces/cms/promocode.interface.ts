import type { CreatePromocode, PromocodeAllInfo } from '../../types/cms';

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

  /**
   * @Get('by-user')
   *
   * @param userId
   * @returns
   */
  getPromocodeByUser: (userId: number | string) => Promise<PromocodeAllInfo[]>;
}
