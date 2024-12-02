
import { useEffect, useRef } from 'react'

const Watermark = () => {
  const user = {
    userEmail: "user123@gmail.com",
  }
  const watermarkRef = useRef<HTMLDivElement>(null)

  const createCanvasWatermark = (text: string) => {
    const canvas = document.createElement('canvas')
    canvas.width = 300
    canvas.height = 200
    const ctx = canvas.getContext('2d')!

    ctx.globalAlpha = 0.1
    ctx.font = '16px sans-serif'
    ctx.fillStyle = '#94a3b8'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.rotate((-20 * Math.PI) / 180)
    ctx.fillText(text, 80, 100)

    return canvas.toDataURL('image/png')
  }

  const applyWatermark = (text: string) => {
    const base64Url = createCanvasWatermark(text)
    const watermarkDiv = document.createElement('div')
    watermarkDiv.className = '__watermark'
    watermarkDiv.style.position = 'fixed'
    watermarkDiv.style.top = '0'
    watermarkDiv.style.left = '0'
    watermarkDiv.style.width = '100%'
    watermarkDiv.style.height = '100%'
    watermarkDiv.style.zIndex = '1000'
    watermarkDiv.style.pointerEvents = 'none'
    watermarkDiv.style.backgroundImage = `url(${base64Url})`
    watermarkDiv.style.backgroundRepeat = 'repeat'

    document.body.appendChild(watermarkDiv)
  }

  useEffect(() => {
    if (user && user.userEmail) {
      applyWatermark(user.userEmail.split('@')[0])
    }

    return () => {
      const watermarkElement = document.querySelector('.__watermark')
      if (watermarkElement) {
        document.body.removeChild(watermarkElement)
      }
    }
  }, [user])

  return <div ref={watermarkRef} style={{ position: 'relative' }} />
}

export default Watermark
