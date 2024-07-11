import {useRouteError} from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl mb-4'>Opps!</h1>
      <p className='mb-4'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as {statusText?: string})?.statusText || (error as Error)?.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
