import TextContent from '../Atoms/TextContent';
import Instagram from '@/app/resources/svg/instagram.svg';
import Facebook from '@/app/resources/svg/facebook.svg';
import Twitter from '@/app/resources/svg/twitter.svg';
import Git from '@/app/resources/svg/github.svg';

function Social() {
    return (
        <>
            <div className='contact'>
                <Twitter/>
                <Facebook/>
                <Instagram/>
                <Git/>
            </div>
        </>
    );
}

export default Social;