import { ChartOne, TinyChart } from './Charts'
import styles from './Dashboard.module.scss'
import {data} from '@/data'


const Dashboard = () => {
  const getTinyChart = ()=>{
    return {x: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000}
  }
  return (
    <div className={styles['dashboard-wrap']}>

      <div>
        <ChartOne />
      </div>

      <div className={styles['table-wrap']}>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Current Price</th>
                <th>Previous Price</th>
                <th>Change</th>
                <th>Volume</th>
                <th>Market cap</th>
                <th>7-Day-Chart</th>
              </tr>
            </thead>

            <tbody>
              {data.map((d, id)=>(
                <tr key={id}>
                  <td>{d.ticker_symbol}</td>
                  <td>{d.company}</td>
                  <td>{d.stock_price}</td>
                  <td>{d.previous_price}</td>
                  <td className={(d.stock_price - d.previous_price) < 0? styles['red-txt'] : styles['green-txt']}>
                    {`${(d.stock_price - d.previous_price) < 0? '-$' :'+$'}${Math.abs((d.stock_price - d.previous_price)).toFixed(2)}`}
                  </td>
                  <td>{d.volume}</td>
                  <td>{d.market_cap}</td>
                  <td><TinyChart color={ (d.stock_price - d.previous_price) < 0? '#c93d40' : '#7ac07e'} /></td>
                </tr>

              ))}
            </tbody>

          </table>
      </div>
    </div>
  )
}

export default Dashboard