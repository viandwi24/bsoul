import {} from 'react'

export interface HelloProps {
  name: string;
}

export function Hello({ name }: HelloProps) {
  return (
    <div>
      <p>Hello, {name}</p>
    </div>
  )
}

export default Hello
