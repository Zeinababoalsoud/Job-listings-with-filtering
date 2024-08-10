import './JobsItems.css';
// import profileImg from '../../assets/images/account.svg'
function JobItems({item}){
    const newArrayOfObject =[...item.languages , ...item.tools];
    console.log(newArrayOfObject);

    return(
        <div id='jobItem' 
        style={item.new  == true ? {borderLeft:"3px solid hsl(180, 29%, 50%)"} : null}
        >
            <div className="rightDiv">
                <img src={item.logo}/>
                <div className='jobsContent'>
                    <div className="text">
                        <label className='lab1'>{item.company}</label>
                        {item.new == true ? <label className='lab2'>new</label> : null}
                        {item.featured == true ? <label className='lab3'>featured</label> : null}
                    </div>
                    <p>{item.position}</p>
                    <ul className='text ul'>
                        <li className='list'>{item.postedAt}</li>
                        <li>{item.contract}</li>
                        <li >U{item.location}</li>
                    </ul>
                </div>

            </div>
            <hr />
            <div className="leftDiv">
                {newArrayOfObject.map((x,index)=>{
                    return(
                        <button key={index}>{x}</button>

                    )

                })}
               

            </div>
        </div>
    )
}
export default JobItems;