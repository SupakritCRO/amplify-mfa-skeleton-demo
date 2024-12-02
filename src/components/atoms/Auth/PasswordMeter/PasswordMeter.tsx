type ColorMapping = {
  [key: number]: string
}

const PasswordMeter = ({ strength }: { strength: number }) => {
  const colors: ColorMapping = {
    0: '#e0e0e0',
    1: '#EF4444', // Close to Tailwind's red-500
    2: '#FBBF24', // Close to Tailwind's yellow-400
    3: '#6EE7B7', // A possible approximation for 'yellowgreen'
    4: '#10B981', // Close to Tailwind's green-500
  }

  return (
    <div className='w-full h-[0.5rem]'>
      <div className='h-full grid grid-cols-4 gap-2'>
        {Array.from({ length: strength }).map((_, index) => {
          return (
            <div
              key={index}
              className={`h-[0.5rem] bg-[${colors[strength]}]`}
              style={{ backgroundColor: colors[strength] }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PasswordMeter
