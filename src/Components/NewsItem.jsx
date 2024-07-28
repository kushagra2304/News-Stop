
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
   {/* <img src={src} style ={{height:"200px", width:"360px"}} className="card-img-top" alt="..."/>  */}
  <div className="card-body" style ={{height:"200px", width:"360px"}}>
    <h5 className="card-title">{title ? title.slice(0, 50) : 'Default Title'}</h5>
    <p className="card-text">{'For Complete news click on READ MORE'}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default NewsItem
