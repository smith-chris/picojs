import React from 'react'
import styles from './Editor.sass'
import {Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import './picoTheme.global.sass'
import 'codemirror/mode/javascript/javascript'

type Props = {
  className?: string,
  onChange: (newValue: string) => void,
  value: string
}

const Editor = (props: Props) => {
  let {className, onChange, value} = props
  return (
    <CodeMirror
      className={[styles.Editor, className].join(' ')}
      value={value}
      options={{
        mode: 'javascript',
        theme: 'pico'
      }}
      onBeforeChange={(editor, data, newValue) => {
        onChange(newValue)
      }}
    />
  )
}

export default Editor
