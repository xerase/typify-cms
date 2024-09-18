import type {
  Chat,
  ChatMessage,
  CreateChatMessage,
  DeleteChatMessage,
  ReadChatMessage,
  UpdateChatMessage,
} from '../../types/cms';

/**
 * @Controller('cms/chat')
 *
 * @publicApi
 */
export interface ChatController {
  /**
   * @Patch('create-message')
   *
   * @param userId
   * @param body
   * @returns
   */
  createMessage: (
    userId: number | string,
    body: CreateChatMessage
  ) => Promise<ChatMessage>;

  /**
   * @Patch('update-message')
   *
   * @param userId
   * @param body
   * @returns
   */
  updateMessage: (
    userId: number | string,
    body: UpdateChatMessage
  ) => Promise<ChatMessage>;

  /**
   * @Patch('delete-message')
   *
   * @param userId
   * @param body
   * @returns
   */
  deleteMessage: (
    userId: number | string,
    body: DeleteChatMessage
  ) => Promise<{ chatId: number | string; messageId: number | string }>;

  /**
   * @Patch('read-chat-messages')
   *
   * @param userId
   * @param body
   * @returns
   */
  readChatMessages: (
    userId: number | string,
    body: ReadChatMessage
  ) => Promise<{ chatId: number | string; messageIds: (number | string)[] }>;

  /**
   * @Get()
   *
   * @returns
   */
  getAllChats: () => Promise<Chat[]>;

  /**
   * @Get('unread')
   *
   * @returns
   */
  getAllUnreadChats: () => Promise<Chat[]>;

  /**
   * @Get(':id')
   *
   * @param id
   * @param skip
   * @param take
   * @returns
   */
  getChatMessagesByChatId: (
    id: number | string,
    skip: number,
    take: number
  ) => Promise<ChatMessage[]>;
}
