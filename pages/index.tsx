import type { NextPage } from 'next'
import Input from '@components/Input'

const Home: NextPage = () => {
  return (
    <div>
      <Input placeholder='Not disabled input' disabled={false}></Input>
      <Input placeholder='Disabled input' disabled={true}></Input>
    </div>
  )
}

export default Home
