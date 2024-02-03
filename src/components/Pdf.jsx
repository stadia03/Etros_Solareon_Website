import pdfFile from '../assets/pdf/ESR.pdf'

// import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

function PDF() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentSucess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div className="d-flex align-items-centre justify-content-centre flex-column">
      <div>
        {/* <i className="bi bi-arrow-left-square-fill display-5 text-gray pointer" role="button"></i>
        <i className="bi bi-arrow-right-square-fill display-5 text-gray pointer" role="button"></i> */}

      </div>
      <div className="w-75 border mx-auto">
        <Document file={pdfFile} onLoadSucess={onDocumentSucess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>

    </div>
  )

}

export default PDF;