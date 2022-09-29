import { schema as originalSchema } from 'prosemirror-schema-basic'
import { Schema } from 'prosemirror-model'

export const schema = new Schema({
  nodes: originalSchema.spec.nodes,
  marks: originalSchema.spec.marks,
})
