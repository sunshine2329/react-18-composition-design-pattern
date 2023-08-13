import Name from './Name'

const FunctionAsChild = () => (
  <div>
    <h1>FunctionAsChild Pattern:</h1>
    <Name>{name => <div>Hello, {name}!</div>}</Name>
  </div>
)

export default FunctionAsChild
