import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')

  console.log("Not Found Error!");
  //   const data = await getSiteData(domain)
  return (
    <main className="flex flex-col bg-white mt-24">
      <div className='mx-auto w-full max-w-screen-xl flex flex-col my-10'>
        <h2 className='text-text-primary font-bold text-[36px]'>404. PAGE NOT FOUND</h2>
        <p className='text-text-primary'>You have tried to access a page that does not exists. Please try again</p>
      </div>
    </main>
  )
}