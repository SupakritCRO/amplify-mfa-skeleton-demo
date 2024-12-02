import EmptyQuestion from '@/assets/images/infographic/undraw_engineering_team.svg'
import { TranslationContext } from '@/providers/TranslationProvider/TranslationContext'
import { useContext } from 'react'

const EmptyQuestionMessage = () => {
  const translateContext = useContext(TranslationContext)
  const { riskTranslate } = translateContext!
  const messageTranslations: {
    [key: string]: string
  } = riskTranslate('messages') as unknown as {
    [key: string]: string
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen gap-2'>
      <img src={EmptyQuestion} alt='Question not found' />
      <p className='text-center text-black text-xl mt-8 mb-8'>
        {messageTranslations.emptyQuestion}
      </p>
    </div>
  )
}

export default EmptyQuestionMessage
