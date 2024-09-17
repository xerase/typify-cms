import type { Admin, CreateAdmin, User } from '../../types/cms';

/**
 * @Controller('cms/user')
 *
 * @publicApi
 */
export interface UserController {
  /**
   * creates an admin based on parameters from the internal cms system
   *
   * @Post('admin')
   *
   * @param body
   * @returns
   */
  createAdmin: (body: CreateAdmin) => Promise<Admin>;

  /**
   * @Get('admin/:email')
   *
   * @param email
   * @returns
   */
  getAdmin: (email: string) => Promise<Admin | null>;

  /**
   * @Get()
   *
   * @param skip
   * @param take
   * @returns
   */
  getAllUsers: (skip: number, take: number) => Promise<User[]>;

  /**
   * @Get('by-id/:id')
   *
   * @param id
   * @returns
   */
  getUserById: (id: number | string) => Promise<User | null>;

  /**
   * @Get('by-email/:email')
   *
   * @param email
   * @returns
   */
  getUserByEmail: (email: string) => Promise<User | null>;
}
