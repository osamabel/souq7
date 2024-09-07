import { useRouter } from 'next/router'

export default function MailtoBtn() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('mailto:email@yahoo.com')}>
      Click me
    </button>
  )
}