import { EditorView } from 'prosemirror-view'
import { initialState } from './state'

export const createEditorView = (dom: HTMLElement): EditorView => {
  return new EditorView(dom, {
    state: initialState,
  })
}
