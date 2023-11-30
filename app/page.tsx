import { Button } from '@/components/ui/button'
import pool from '@/lib/db'

export default async function Home() {
  const res = await pool.query('SELECT * FROM test')
  console.log(res)
  
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button size={'lg'}>Project Gallery</Button>
      <div>{JSON.stringify(res)}</div>
      <textarea className='w-full h-96' value={JSON.stringify(res)}></textarea>
    </main>
  )
}
