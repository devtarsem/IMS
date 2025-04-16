import './../styles/add_sec.css'
import './../utils/util.css'
function Exports(){
    return(
        <div className="exp flex flex-dir gap16">
            <h2 className="head2 head2_ decenter">Export data / backup</h2>
            <div className='flex gap16 flex-1'>
                <button className="btn">Sensitive data</button>
                <button className="btn">Protective files</button>
            </div>
            <hr/>
        </div>
    )
}


export default Exports;