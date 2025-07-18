import Profiles from './profiles';

export default function Board(){

    const handleClick = (e: any) =>{
        console.log(e.target);
    }
    return(
        <div className='board'>
            <h1 className='leaderboard'>Leaderboard</h1>
            
            <div className='duration'>
                <button onClick={handleClick} data-id='7'>7 Days</button>
                <button onClick={handleClick} data-id='30'>30 Days</button>
                <button onClick={handleClick} data-id='0'>All Time</button>

                </div>
                
                </div>
    )
}