// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import devalue from '@nuxt/devalue'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import 'virtual:windi.css'
import './assets/styles/main.css'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
const routes = setupLayouts(generatedRoutes)

loadFonts()
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
    ctx.app.use(vuetify)
  },
  {
    transformState(state) {
      return import.meta.env.SSR ? devalue(state) : state
    },
  },
)
