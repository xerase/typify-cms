import { CreateContent, UpdateContent } from '../../types/cms';

/**
 * @Controller('cms/content')
 *
 * @publicApi
 */
export interface ContentController {
  /**
   * @Post()
   *
   * @param body
   * @returns
   */
  createContent: (body: CreateContent) => any;
  /**
   * @Patch(':slug')
   *
   * @param slug
   * @param body
   * @returns
   */
  updateContent: (slug: string, body: UpdateContent) => any;
  /**
   * @Delete(':slug')
   *
   * @param slug
   * @returns
   */
  deleteContent: (slug: string) => any;
  /**
   * @Get()
   *
   * @returns
   */
  getContents: () => any;
  /**
   * @Get(':slug')
   *
   * @param slug
   * @returns
   */
  getContentBySlug: (slug: string) => any;
}
