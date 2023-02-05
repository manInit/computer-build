import './report.css';

function ReportPage() {
  return (
    <>
      <h2 className="text-center mt-3">Отчет по продажам</h2>
      <div className="wrapper bg-white d-flex w-50 align-items-center" style={{height: '40px'}}>
        <p style={{width: '270px'}} className="m-0">Период:</p>
        <input type="date" className="form-control mx-3" placeholder="Дата" />
        -
        <input type="date" className="form-control mx-3" placeholder="Дата" />
        <button className="btn btn-primary" style={{width: '300px'}}>Отчет</button>
      </div>
      <div className='w-50 mx-auto'>
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Кол-во</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>N</td>
              <td>М</td>
              <td>Цен.</td>
            </tr>
            <tr>
              <td>N</td>
              <td>М</td>
              <td>Цен.</td>
            </tr>
            <tr>
              <td>N</td>
              <td>М</td>
              <td>Цен.</td>
            </tr>
            <tr>
              <td>N</td>
              <td>М</td>
              <td>Цен.</td>
            </tr>
            <tr>
              <td>N</td>
              <td>М</td>
              <td>Цен.</td>
            </tr>
            <tr>
              <td>Итого</td>
              <td>М</td>
              <td>Цен.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ReportPage
