import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"
//ponemos el authProvider para poder compartir en toda la aplicacion 
export const HeroesApp = () => {
  return (
    <>
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
    </>
  )
}
