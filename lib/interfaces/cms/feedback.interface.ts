import type {
  CreateFeedbackMessage,
  Feedback,
  FeedbackMessage,
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
  acceptFeedback: (id: number | string) => Promise<Feedback>;

  /**
   * @Post('message')
   *
   * @param body
   * @returns
   */
  addFeedbackMessage: (body: CreateFeedbackMessage) => Promise<Feedback>;

  /**
   * @Delete(':id')
   *
   * @param id
   * @returns
   */
  deleteFeedback: (id: number | string) => Promise<Feedback>;

  /**
   * @Delete('message/:id')
   *
   * @param id
   * @returns
   */
  deleteFeedbackMessage: (id: number | string) => Promise<FeedbackMessage>;

  /**
   * @Get()
   *
   * @param skip
   * @param take
   * @returns
   */
  getAllFeedbacks: (skip: number, take: number) => Promise<Feedback[]>;

  /**
   * @Get('in-processing')
   *
   * @param skip
   * @param take
   * @returns
   */
  getInProcessingFeedbacks: (skip: number, take: number) => Promise<Feedback[]>;

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
    take: number
  ) => Promise<Feedback[]>;

  /**
   * @Patch('reject-feedback/:id')
   *
   * @param id
   * @returns
   */
  rejectFeedback: (id: number | string) => Promise<Feedback>;

  /**
   * @Patch('message/:id')
   *
   * @param id
   * @param body
   * @returns
   */
  updateFeedbackMessage: (
    id: number | string,
    body: UpdateFeedbackMessage
  ) => Promise<FeedbackMessage>;
}
