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
  acceptInn: (id: number | string) => any;
  /**
   * @Get()
   *
   * @param skip
   * @param take
   * @returns
   */
  getInns: (skip: number, take: number) => any;
  /**
   * @Get('in-processing')
   *
   * @param skip
   * @param take
   * @returns
   */
  getInProcessingInns: (skip: number, take: number) => any;
  /**
   * @Patch('reject-inn/:id')
   *
   * @param id
   * @returns
   */
  rejectInn: (id: number | string) => any;
}
