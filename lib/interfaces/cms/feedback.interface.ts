import type {
  CreateFeedbackMessage,
  Feedback,
  FeedbackMessage,
  UpdateFeedbackMessage,
} from '../../types/cms';

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
   * @Post('message/:id')
   * id - feedbackId
   *
   *
   * @param id
   * @param userId
   * @param body
   * @returns
   */
  addFeedbackMessage: (
    id: number | string,
    userId: number | string,
    body: CreateFeedbackMessage
  ) => Promise<FeedbackMessage>;

  /**
   * @Delete(':id')
   *
   * @param id
   * @returns
   */
  deleteFeedback: (id: number | string) => Promise<Feedback>;

  /**
   * @Delete('message/:id')
   * userId - @Query('user-id')
   *
   * @param id
   * @param userId
   * @returns
   */
  deleteFeedbackMessage: (
    id: number | string,
    userId: number | string
  ) => Promise<FeedbackMessage>;

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
   * userId - @Query('user-id')
   *
   * @param id
   * @param userId
   * @param body
   * @returns
   */
  updateFeedbackMessage: (
    id: number | string,
    userId: number | string,
    body: UpdateFeedbackMessage
  ) => Promise<FeedbackMessage>;
}
