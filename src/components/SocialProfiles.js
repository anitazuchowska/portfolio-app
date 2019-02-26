import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfile';

const SocialProfile = props => {
        const { image, link} = props.socialProfile;
        return(
            <div style={{display:'inline-block'}}>
                <a href={link}><img src={image} alt="social ico" style={{width:35, height:35, margin:10}}/></a>
            </div>
        )
};

const SocialProfiles = () =>(
        <div>
            <h2>Connect with me</h2>
            <div>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                            <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
                        ))
                }
            </div>
        </div>
    );
export default SocialProfiles;
