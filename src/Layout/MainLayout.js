import Head from 'next/head'
import { Switch, Toggle } from '../components/Toggle'
import { useTheme } from '../hooks/useTheme'

export function MainLayout({ children }) {
  const title = 'base project'

  const [_, toggleTheme] = useTheme()
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        {children}
        asdçlakdçaksçdlk
      </main>
      <footer>
        <Switch>
          <input type="checkbox" name="" id="" onChange={toggleTheme} />
          <Toggle />
        </Switch>
      </footer>
    </div>
  )
}
