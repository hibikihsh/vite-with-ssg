import react from '@vitejs/plugin-react-swc'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), vike()],
})
