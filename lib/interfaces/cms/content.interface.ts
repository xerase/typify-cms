import type { Content, CreateContent, UpdateContent } from '../../types/cms';

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
  createContent: (body: CreateContent) => Promise<Content>;

  /**
   * @Delete(':slug')
   *
   * @param slug
   * @returns
   */
  deleteContent: (slug: string) => Promise<Content>;

  /**
   * @Get(':slug')
   *
   * @param slug
   * @returns
   */
  getContentBySlug: (slug: string) => Promise<Content | null>;

  /**
   * @Get()
   *
   * @returns
   */
  getContents: () => Promise<Content[]>;

  /**
   * @Patch(':slug')
   *
   * @param slug
   * @param body
   * @returns
   */
  updateContent: (slug: string, body: UpdateContent) => Promise<Content>;
}
