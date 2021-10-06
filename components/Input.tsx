/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '@styles/Input.module.sass'

export default function Input({
  type,
  label,
  placeholder,
  description,
  hint,
  disabled,
  invalid,
  message
}: {
  type?: string
  label?: string
  placeholder?: string
  description?: string
  hint?: string
  invalid?: boolean
  disabled?: boolean
  field?: any
  form?: any
}): JSX.Element {
  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      className={[styles.Input, disabled ? styles.InputDisabled : ''].join(' ')}
      type={type}
    />
  )
}
