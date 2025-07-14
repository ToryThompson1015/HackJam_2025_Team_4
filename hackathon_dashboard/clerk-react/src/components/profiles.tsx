import samplePhoto from '../images/circle-photo.jpg'

export default function Profiles() {
    return (
        <div  id='profile'>
            <div className='flex'>
                <div className='item' style={{ display: "flex", alignItems: "center" }}>
                    <div className="profile-photo" style={{ borderRadius: "50%", marginLeft: "5%" }}>
                        <img src={samplePhoto} alt="sample-photo" style={{ minHeight: "25vh", minWidth: "25vw" }} />
                    </div>
                    <div className='profile-info'>
                        <div className='profile-info-name'>
                            <h3>
                                Jane Doe
                            </h3>
                        </div>
                        <div>
                           <br /> 
                        </div>
                        <div className='profile-info-body'>
                            <p>
                                Jane is a software engineer with a passion for building scalable web applications. She loves coding, coffee, and cats.
                            </p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}