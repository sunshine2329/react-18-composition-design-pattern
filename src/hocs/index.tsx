import withInnerWidth, { WrappedComponentProps } from './withInnerWidth'

const MyComponent = ({ innerWidth }: WrappedComponentProps) => {
  console.log('window.innerWidth', innerWidth)
  return (
    <div style={{ width: `${innerWidth}px`, backgroundColor: 'blue', overflow: 'auto' }}>HOCs</div>
  )
}

export default withInnerWidth(MyComponent)
