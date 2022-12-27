import React from 'react'
import CodeBlock from '@theme/CodeBlock'

/* next step is to allow ```language ```
syntax to be passed, so Markdown highlighting in VS codes with it 
*/
export default function Code(props) {
  //const width = `col col--${props.width}`
  // When using className "col" instead of the width, both blocks are attribute same width

  return (
    <div className={'col'}>
      <span>{props.header}</span>
      <CodeBlock language={props.lang} title={props.title}>
        {props.children}
      </CodeBlock>
    </div>
  )
}
