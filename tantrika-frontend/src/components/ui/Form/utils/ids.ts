export const INPUT_ID_PATTERN = `form_input_$0`
export const MESSAGE_ID_PATTERN = `form_message_$0`

export const getInputId = (name: string) => INPUT_ID_PATTERN.replace('$0', name)
export const getMessageId = (name: string) =>
  MESSAGE_ID_PATTERN.replace('$0', name)
