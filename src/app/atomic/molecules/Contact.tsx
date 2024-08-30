import TextContent from '../atoms/TextContent';
import ImageVector from '../atoms/ImageVector';
import Phone from '@/app/resources/svg/phone.svg'; 

function Contact() {
    return (
        <>
            <div className='contact gap-x-9'>
                <Phone width="12px" height="12px" className=" text-[#F9F9F7] stroke-current"/>
                <TextContent text='+591 72886424' className=' text-[0.6rem] text-[#F9F9F7]'></TextContent>
                <TextContent text='animetx098@gmail.com' className='text-[0.6rem] text-[#F9F9F7]'></TextContent>
            </div>
        </>
    );
}

export default Contact;