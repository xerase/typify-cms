import type {
  CreateOption,
  CreateOptionVariant,
  Option,
  OptionVariant,
  UpdateOption,
  UpdateOptionVariant,
} from '../../types/cms';

/**
 * @Controller('cms/option')
 *
 * @publicApi
 */
export interface OptionController {
  /**
   * @Post()
   *
   * @param body
   * @returns
   */
  createOption: (body: CreateOption) => Promise<Option>;

  /**
   * @Post('variant')
   *
   * @param body
   * @returns
   */
  createOptionVariant: (body: CreateOptionVariant) => Promise<OptionVariant>;

  /**
   * @Patch()
   *
   * @param id
   * @param body
   * @returns
   */
  updateOptionById: (
    id: number | string,
    body: UpdateOption
  ) => Promise<Option>;

  /**
   * @Patch('variant')
   *
   * @param id
   * @param body
   * @returns
   */
  updateOptionVariantById: (
    id: number | string,
    body: UpdateOptionVariant
  ) => Promise<OptionVariant>;

  /**
   * @Get()
   *
   * @returns
   */
  getOptions: () => Promise<Option[]>;

  /**
   * @Get(':id')
   *
   * @param id
   * @returns
   */
  getOptionById: (id: number | string) => Promise<Option | null>;

  /**
   * @Get('by-option/:id')
   *
   * @param id
   * @returns
   */
  getOptionVariantsByOptionId: (
    id: number | string
  ) => Promise<OptionVariant[]>;
}
