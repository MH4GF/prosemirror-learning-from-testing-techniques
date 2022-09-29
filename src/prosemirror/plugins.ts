import type { Plugin } from 'prosemirror-state'
import { exampleSetup } from 'prosemirror-example-setup'
import { schema } from './schema'

export const plugins: Plugin[] = exampleSetup({ schema })
