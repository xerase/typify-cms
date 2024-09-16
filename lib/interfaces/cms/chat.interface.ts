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
   * @param usesId
   * @param body
   * @returns
   */
  createMessage: (
    usesId: number | string,
    body: CreateChatMessage
  ) => Promise<ChatMessage>;

  /**
   * @Patch('update-message')
   *
   * @param usesId
   * @param body
   * @returns
   */
  updateMessage: (
    usesId: number | string,
    body: UpdateChatMessage
  ) => Promise<ChatMessage>;

  /**
   * @Patch('delete-message')
   *
   * @param usesId
   * @param body
   * @returns
   */
  deleteMessage: (
    usesId: number | string,
    body: DeleteChatMessage
  ) => Promise<{ chatId: number | string; messageId: number | string }>;

  /**
   * @Patch('read-chat-messages')
   *
   * @param usesId
   * @param body
   * @returns
   */
  readChatMessages: (
    usesId: number | string,
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
