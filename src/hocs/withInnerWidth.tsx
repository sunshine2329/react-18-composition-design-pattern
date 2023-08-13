import { useEffect, useState, ComponentType, ComponentProps } from 'react'

export type WrappedComponentProps = {
  innerWidth?: number | null
}

function withInnerWidth<P>(WrappedComponent: ComponentType<P & WrappedComponentProps>) {
  const WithInnerWidth = (props: ComponentProps<typeof WrappedComponent>) => {
    const [innerWidth, setInnerWidth] = useState<number | null>(window.innerWidth)

    useEffect(() => {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    const handleResize = () => {
      setInnerWidth(window.innerWidth)
    }

    return <WrappedComponent {...props} innerWidth={innerWidth} />
  }

  WithInnerWidth.displayName = `withInnerWidth(${
    WrappedComponent.displayName ?? WrappedComponent.name
  })`
  return WithInnerWidth
}

export default withInnerWidth
