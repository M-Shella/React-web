import React, {useEffect, useState} from 'react'
import Cards from './Cards';

const Portfolio = () => {
    const [datas, setDatas] = useState([]);
    const [renered, setRenered] = useState(false);

    useEffect(()=>{
        fetch(`./matej/index.php`).then(res => res.json()).then((result) =>{
            if(!renered){setDatas(result); setRenered(true)}
            else{
                setTimeout(() => {
                    setDatas(result);
                }, 5000); 
            }
        });
    },[])

    
    
    return (
        <div className="h-100 d-inline-block w-100">
            <div className="text-center d-flex justify-content-center flex-row flex-wrap">
                {datas.map((data) => (
                    <Cards Name={data.name} Text={data.about} Tech={data.technologie} Link={data.downloadaweb} GitHub={data.github} Date={data.date} Download={Boolean(parseInt(data.download))}/>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
