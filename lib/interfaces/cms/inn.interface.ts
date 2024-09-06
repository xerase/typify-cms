import type { Inn } from '../../types/cms';

/**
 * @Controller('cms/inn')
 *
 * @publicApi
 */
export interface InnController {
  /**
   * @Patch('accept-inn/:id')
   *
   * @param id
   * @returns
   */
  acceptInn: (id: number | string) => Promise<void>;

  /**
   * @Get()
   *
   * @param skip
   * @param take
   * @returns
   */
  getInns: (skip: number, take: number) => Promise<Inn[]>;

  /**
   * @Get('in-processing')
   *
   * @param skip
   * @param take
   * @returns
   */
  getInProcessingInns: (skip: number, take: number) => Promise<Inn[]>;

  /**
   * @Get('by-inn/:inn')
   *
   * @param inn
   * @returns
   */
  getByInn: (inn: string) => Promise<Inn | null>;

  /**
   * @Get('by-user/:id')
   *
   * @param id
   * @returns
   */
  getByUserId: (id: number | string) => Promise<Inn | null>;

  /**
   * @Patch('reject-inn/:id')
   *
   * @param id
   * @returns
   */
  rejectInn: (id: number | string) => Promise<void>;
}
