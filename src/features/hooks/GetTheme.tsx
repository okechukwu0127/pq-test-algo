import { useAppSelector } from 'src/app/hooks'
import { RootState } from 'src/app/store'

function GetTheme() {
  const mix_background_layout: string = useAppSelector(
    (state: RootState) => state.themeCustomizer.mix_background_layout
  )

  const themeColor = {
    color: mix_background_layout === 'dark-only' || mix_background_layout === '' ? 'white' : '#0f2642',
    background: mix_background_layout === 'dark-only' || mix_background_layout === '' ? '#0f2642' : 'white',
  }
  return themeColor
}

export { GetTheme }
