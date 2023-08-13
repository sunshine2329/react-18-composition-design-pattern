import withInnerWidth, { WrappedComponentProps } from './withInnerWidth'

const MyComponent = ({ innerWidth }: WrappedComponentProps) => {
  console.log('window.innerWidth', innerWidth)
  return (
    <div>
      <h1>HOCs Pattern:</h1>
      <div style={{ width: `${innerWidth}px`, backgroundColor: 'blue', overflow: 'auto' }}>
        HOCs
      </div>
    </div>
  )
}

export default withInnerWidth(MyComponent)
