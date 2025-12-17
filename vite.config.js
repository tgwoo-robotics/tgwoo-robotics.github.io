import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // username.github.io repository를 사용하는 경우 base를 '/'로 설정
  // 다른 repository 이름을 사용하는 경우 '/repository-name/'으로 설정
  base: '/',  // 👈 username.github.io 사용 시
})
