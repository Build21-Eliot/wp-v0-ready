import React, { useEffect, useRef, useState } from 'react'

const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 300
const RUNNER_WIDTH = 40
const RUNNER_HEIGHT = 60
const OBSTACLE_WIDTH = 30
const OBSTACLE_HEIGHT = 60
const GROUND_HEIGHT = 30

export function NeonRunnerComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let runnerY = CANVAS_HEIGHT - GROUND_HEIGHT - RUNNER_HEIGHT
    let runnerVelocity = 0
    let obstacles: { x: number; y: number }[] = []
    let gameSpeed = 5
    let jumpStrength = -15
    let isJumping = false

    const drawNeonRect = (x: number, y: number, width: number, height: number, color: string) => {
      ctx.shadowBlur = 15
      ctx.shadowColor = color
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.strokeRect(x, y, width, height)
      ctx.fillStyle = color
      ctx.fillRect(x, y, width, height)
    }

    const drawRunner = () => {
      drawNeonRect(50, runnerY, RUNNER_WIDTH, RUNNER_HEIGHT, '#ff00ff')
    }

    const drawObstacles = () => {
      obstacles.forEach((obstacle) => {
        drawNeonRect(obstacle.x, obstacle.y, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, '#00ffff')
      })
    }

    const drawGround = () => {
      drawNeonRect(0, CANVAS_HEIGHT - GROUND_HEIGHT, CANVAS_WIDTH, GROUND_HEIGHT, '#ff00ff')
    }

    const drawScore = () => {
      ctx.fillStyle = '#ffffff'
      ctx.font = '20px Arial'
      ctx.fillText(`Score: ${score}`, 10, 30)
      ctx.fillText(`High Score: ${highScore}`, CANVAS_WIDTH - 150, 30)
    }

    const updateGame = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      // Background
      const gradient = ctx.createLinearGradient(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      gradient.addColorStop(0, '#000033')
      gradient.addColorStop(1, '#660066')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      drawGround()
      drawRunner()
      drawObstacles()
      drawScore()

      // Runner physics
      if (isJumping) {
        runnerY += runnerVelocity
        runnerVelocity += 0.8

        if (runnerY > CANVAS_HEIGHT - GROUND_HEIGHT - RUNNER_HEIGHT) {
          runnerY = CANVAS_HEIGHT - GROUND_HEIGHT - RUNNER_HEIGHT
          isJumping = false
        }
      }

      // Move and generate obstacles
      obstacles = obstacles.filter((obstacle) => obstacle.x > -OBSTACLE_WIDTH)
      obstacles.forEach((obstacle) => (obstacle.x -= gameSpeed))

      if (obstacles.length === 0 || obstacles[obstacles.length - 1].x < CANVAS_WIDTH - 200) {
        obstacles.push({ x: CANVAS_WIDTH, y: CANVAS_HEIGHT - GROUND_HEIGHT - OBSTACLE_HEIGHT })
      }

      // Collision detection
      const runnerBox = { x: 50, y: runnerY, width: RUNNER_WIDTH, height: RUNNER_HEIGHT }
      for (const obstacle of obstacles) {
        const obstacleBox = { x: obstacle.x, y: obstacle.y, width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT }
        if (
          runnerBox.x < obstacleBox.x + obstacleBox.width &&
          runnerBox.x + runnerBox.width > obstacleBox.x &&
          runnerBox.y < obstacleBox.y + obstacleBox.height &&
          runnerBox.y + runnerBox.height > obstacleBox.y
        ) {
          setGameOver(true)
          if (score > highScore) {
            setHighScore(score)
          }
          return
        }
      }

      setScore((prevScore) => prevScore + 1)

      animationFrameId = requestAnimationFrame(updateGame)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.code === 'Space' || e.code === 'ArrowUp') && !isJumping) {
        isJumping = true
        runnerVelocity = jumpStrength
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    updateGame()

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [gameOver])

  const handleRestart = () => {
    setGameOver(false)
    setScore(0)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-neon-pink">Neon Runner</h1>
      <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} className="border border-neon-blue" />
      {gameOver && (
        <div className="mt-4">
          <p className="text-2xl text-neon-blue mb-2">Game Over!</p>
          <button
            onClick={handleRestart}
            className="px-4 py-2 bg-neon-pink text-white rounded hover:bg-pink-600 transition-colors"
          >
            Restart
          </button>
        </div>
      )}
      <p className="mt-4 text-white">Press Space or Up Arrow to jump</p>
    </div>
  )
}