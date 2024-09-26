import type { AcceptOrder, Order } from '../../types/cms';

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
  acceptOrder: (id: number | string, body: AcceptOrder) => Promise<Order>;

  /**
   * @Patch('cancel-accept/:id')
   *
   * @param id
   * @returns
   */
  cancelAcceptOrder: (id: number | string) => Promise<Order>;

  /**
   * @Patch('cancel-reject/:id')
   *
   * @param id
   * @returns
   */
  cancelRejectOrder: (id: number | string) => Promise<Order>;

  /**
   * @Patch('delivered/:id')
   *
   * @param id
   * @returns
   */
  deliveredOrder: (id: number | string) => Promise<Order>;

  /**
   * @Get('cancel-in-processing')
   *
   * @param skip
   * @param take
   * @returns
   */
  getInProcessingCancelOrders: (skip: number, take: number) => Promise<Order[]>;

  /**
   * @Get('all')
   *
   * @param skip
   * @param take
   * @returns
   */
  getAllOrders: (skip: number, take: number) => Promise<Order[]>;

  /**
   * @Get('in-processing')
   *
   * @param skip
   * @param take
   * @returns
   */
  getInProcessingOrders: (skip: number, take: number) => Promise<Order[]>;

  /**
   * @Get('one/:id')
   *
   * @param id
   * @returns
   */
  getOrderById: (id: number | string) => Promise<Order | null>;

  /**
   * @Get('by-params')
   *
   * @param email
   * @param phone
   * @param fio
   * @param id
   * @param minCost
   * @param maxCost
   * @param minData
   * @param maxData
   * @returns
   */
  getOrderByParams: (
    email?: string,
    phone?: string,
    fio?: string,
    id?: number | string,
    minCost?: number,
    maxCost?: number,
    minData?: Date,
    maxData?: Date
  ) => Promise<Order[]>;

  /**
   * @Patch('reject/:id')
   *
   * @param id
   * @returns
   */
  rejectOrder: (id: number | string) => Promise<Order>;
}
