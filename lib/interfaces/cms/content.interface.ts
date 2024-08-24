import type { CreateContent, UpdateContent } from '@/lib';

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
   * @Delete(':slug')
   *
   * @param slug
   * @returns
   */
  deleteContent: (slug: string) => any;
  /**
   * @Get(':slug')
   *
   * @param slug
   * @returns
   */
  getContentBySlug: (slug: string) => any;
  /**
   * @Get()
   *
   * @returns
   */
  getContents: () => any;
  /**
   * @Patch(':slug')
   *
   * @param slug
   * @param body
   * @returns
   */
  updateContent: (slug: string, body: UpdateContent) => any;
}
