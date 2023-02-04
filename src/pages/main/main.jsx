import PriceSummary from '../../components/price-summary/price-summary'
import ComponentList from '../../components/component-list/component-list'
import './main.css'

function MainPage() {
  return (
    <div className="mt-5 container text-center">
      <div className="row">
        <div className="col-8">
          <ComponentList/>
        </div>
        <div className="col">
          <PriceSummary />
        </div>
      </div>
    </div>
  )
}

export default MainPage
