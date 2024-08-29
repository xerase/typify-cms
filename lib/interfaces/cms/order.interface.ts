import type { AcceptOrder } from '@/lib';

/**
 * @Controller('cms/order')
 *
 * @publicApi
 */
export interface OrderController {
  /**
   * @Patch('accept/:id')
   *
   * @param id
   * @param body
   * @returns
   */
  acceptOrder: (id: number | string, body: AcceptOrder) => any;
  /**
   * @Patch('cancel-accept/:id')
   *
   * @param id
   * @returns
   */
  cancelAcceptOrder: (id: number | string) => any;
  /**
   * @Patch('cancel-reject/:id')
   *
   * @param id
   * @returns
   */
  cancelRejectOrder: (id: number | string) => any;
  /**
   * @Patch('delivered/:id')
   *
   * @param id
   * @returns
   */
  deliveredOrder: (id: number | string) => any;
  /**
   * @Get('cancel-in-processing')
   *
   * @param skip
   * @param take
   * @returns
   */
  getInProcessingCancelOrders: (skip: number, take: number) => any;
  /**
   * @Get('all')
   *
   * @param skip
   * @param take
   * @returns
   */
  getAllOrders: (skip: number, take: number) => any;
  /**
   * @Get('in-processing')
   *
   * @param skip
   * @param take
   * @returns
   */
  getInProcessingOrders: (skip: number, take: number) => any;
  /**
   * @Patch('reject/:id')
   *
   * @param id
   * @returns
   */
  rejectOrder: (id: number | string) => any;
}
