import { CreatePromocode } from '../../types/cms';

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
   * @Get('all')
   *
   * @returns
   */
  getPromocodes: () => any;
}
