import './report.css';

function ReportPage() {
  return (
    <>
      <h2 className="text-center mt-3">Просмотр результатов поступления</h2>
      <div className="wrapper d-flex w-50 align-items-center" style={{height: '40px'}}>
        <p style={{width: '270px'}} className="m-0">Дата поступления:</p>
        <input type="date" className="form-control mx-3" placeholder="Дата" />
        <button className="btn btn-primary" style={{width: '300px'}}>Отчет</button>
      </div>
      <div>
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
