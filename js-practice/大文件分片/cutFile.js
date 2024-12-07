const CHUNK_SIZE = 1024 * 1024 * 5
const THREAD_COUNT = navigator.hardwareConcurrency

export function cutFile(file) {
  return new Promise((resolve, reject) => {
    const chunkCount = Math.ceil(file.size / CHUNK_SIZE)
    const threadChunkCount = Math.ceil(chunkCount / THREAD_COUNT)
    let finishCount = 0
    for(let i = 0; i < THREAD_COUNT; i++) {
      // 创建一个线程，并分配任务
      const worker = new Worker('./worker.js', {
        type: 'module'
      })
      let end = (i + 1) * threadChunkCount
      if(end > chunkCount) {
        end = chunkCount
      }
      worker.postMessage({
        file,
        CHUNK_SIZE,
        startChunkIndex: i * threadChunkCount,
        endChunkIndex: end
      })
      worker.onmessage = (e) => {
        for(let i = start; i < end; i++) {
          result[i] = e.data[i - start]
        }
        worker.terminate()
        finishCount++
        if(finishCount === THREAD_COUNT) {
          resolve(result)
        }
      }
    }
  })
}