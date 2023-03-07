import { useState } from 'react'

const DownloadPDFButton = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleDownloadPDF = async () => {
    setShowPopup(true)

    try {
      const response = await fetch('/path/to/pdf/file.pdf')
      const blob = await response.blob()

      const downloadUrl = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = downloadUrl
      link.setAttribute('download', 'file.pdf')
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
    } catch (error) {
      console.error('Error downloading PDF', error)
    }
  }

  return (
    <div>
      <button onClick={handleDownloadPDF}>Download PDF</button>
      {showPopup && (
        <div className="popup">
          <h2>Download PDF</h2>
          <p>Seu download deve começar automaticamente em breve.</p>
          <p>Caso contrário, clique <a href="/path/to/pdf/file.pdf">aqui</a> para baixar o arquivo.</p>
        </div>
      )}
    </div>
  )
}

export default DownloadPDFButton
