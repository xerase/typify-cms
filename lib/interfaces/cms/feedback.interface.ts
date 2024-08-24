import type {
  CreateFeedbackMessage,
  UpdateFeedbackMessage
} from '@/lib';

/**
 * @Controller('cms/feedback')
 *
 * @publicApi
 */
export interface FeedbackController {
  /**
   * @Patch('accept-feedback/:id')
   *
   * @param id
   * @returns
   */
  acceptFeedback: (id: number | string) => any;
  /**
   * @Post('message')
   *
   * @param body
   * @returns
   */
  addFeedbackMessage: (body: CreateFeedbackMessage) => any;
  /**
   * @Delete(':id')
   *
   * @param id
   * @returns
   */
  deleteFeedback: (id: number | string) => any;
  /**
   * @Delete('message/:id')
   *
   * @param id
   * @returns
   */
  deleteFeedbackMessage: (id: number | string) => any;
  /**
   * @Get()
   *
   * @param skip
   * @param take
   * @returns
   */
  getAllFeedbacks: (skip: number, take: number) => any;
  /**
   * @Get(':article')
   *
   * @param article
   * @param skip
   * @param take
   * @returns
   */
  getFeedbackByProductVariantArticle: (
    article: number | string,
    skip: number,
    take: number,
  ) => any;
  /**
   * @Patch('reject-feedback/:id')
   *
   * @param id
   * @returns
   */
  rejectFeedback: (id: number | string) => any;
  /**
   * @Patch('message/:id')
   *
   * @param id
   * @param body
   * @returns
   */
  updateFeedbackMessage: (
    id: number | string,
    body: UpdateFeedbackMessage,
  ) => any;
}
