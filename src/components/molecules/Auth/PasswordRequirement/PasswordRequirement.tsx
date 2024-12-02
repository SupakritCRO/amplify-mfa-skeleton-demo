import { useEffect, useRef, useState } from 'react'
import './animation.scss'
interface passwordRequirementProps {
  password: string
}

const PasswordRequirement = ({ password }: passwordRequirementProps) => {
  const [requirements, setRequirements] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
  })
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isExpanded && containerRef.current) {
      containerRef.current.style.height = `${containerRef.current.scrollHeight}px`
    } else if (containerRef.current) {
      containerRef.current.style.height = '0px'
    }
  }, [isExpanded])

  useEffect(() => {
    // Expand the component when it mounts
    setTimeout(() => setIsExpanded(true), 0)

    // Collapse the component when it unmounts
    return () => setIsExpanded(false)
  }, [])

  const handlePasswordChange = (value: string) => {
    setRequirements({
      length: value.length >= 12,
      lowercase: /[a-z]/.test(value),
      uppercase: /[A-Z]/.test(value),
      number: /\d/.test(value),
      specialChar: /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(value),
    })
  }

  useEffect(() => {
    handlePasswordChange(password)
  }, [password])

  return (
    <div
      ref={containerRef}
      className={`password-requirements ${isExpanded ? 'expanded' : 'collapsed'}`}
    >
      <h3 className='font-bold'>Password requirements</h3>
      <ul>
        <li className={requirements.length ? 'text-green-500' : ''}>
          <span>{requirements.length ? '✔' : ''}</span>{' '}
          <span>At least 12 characters</span>
        </li>
        <li className={requirements.lowercase ? 'text-green-500' : ''}>
          <span>{requirements.lowercase ? '✔' : ''}</span>{' '}
          <span>At least 1 lowercase character</span>
        </li>
        <li className={requirements.uppercase ? 'text-green-500' : ''}>
          <span>{requirements.uppercase ? '✔' : ''}</span>{' '}
          <span>At least 1 uppercase character</span>
        </li>
        <li className={requirements.number ? 'text-green-500' : ''}>
          <span>{requirements.number ? '✔' : ''}</span>{' '}
          <span>At least 1 number</span>
        </li>
        <li className={requirements.specialChar ? 'text-green-500' : ''}>
          <span>{requirements.specialChar ? '✔' : ''}</span>{' '}
          <span>At least 1 special character</span>
        </li>
      </ul>
    </div>
  )
}

export default PasswordRequirement
