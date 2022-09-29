import { EditorState } from 'prosemirror-state'
import { plugins } from './plugins'
import { schema } from './schema'

export const initialState = EditorState.create({ schema, plugins })
