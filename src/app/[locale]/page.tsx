import { redirect } from '@/navigation'
import { routes } from '@/routes/routes'

export default function Home() {
  return redirect(routes.login)
}
