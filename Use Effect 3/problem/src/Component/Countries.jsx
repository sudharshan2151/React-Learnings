import LoadingIndicator from "./LoadingIndicator";
import {useEffect,useState} from "react"
import Pagination from "./Pagination"
import CountriesRow from "./CountriesRow"
function Countries() {
 const [page,setPage]=useState(1);
 const [load,setLoader] = useState(true);
 const [data,setData] = useState([]);
 const [total,setTotal] = useState(0);
  useEffect(()=>{
    setLoader(true);
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10&orderBy=desc`)
    .then(res=>res.json())
    .then(data1=>{
      setData(data1.data);
      setTotal(data1.totalPages);
    })
    setLoader(false);
  },[page])

  if(load){
    return <LoadingIndicator/>
  }
  return (
    <>
      {data.length<=0?<LoadingIndicator/>:<div><h1 data-testid="countries-header">Countries List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>COUNTRY</th>
            <th>POPULATION</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody data-testid="countries-container">
          {/* Show the CountriesRow here  */}
          {data.map(a=>{
            return <CountriesRow id={a.id} country={a.country} population={a.population} rank={a.Rank} />
          })}
        </tbody>
      </table>
      <div>{/* Pagination */}
        <Pagination page={page} next={total==page?true:false} prev={page==1?true:false} total={total} inc={()=>setPage(page+1)} dec={()=>setPage(page-1)} cur={page===1?()=>setPage(page+1):()=>setPage(page-1)}/>
      </div>
      </div>}
    </>
  );
}

export default Countries;
