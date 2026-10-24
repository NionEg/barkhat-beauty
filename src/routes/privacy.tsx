import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 32 }}>
      <h1>Политика конфиденциальности</h1>
      <p>Мы обрабатываем ваши данные в соответствии с 152-ФЗ.</p>
    </div>
  )
}
