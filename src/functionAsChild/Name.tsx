import React from 'react'

type NameProps = {
  children: (name: string) => React.ReactNode
}

const Name: React.FC<NameProps> = ({ children }) => children('World')

export default Name
