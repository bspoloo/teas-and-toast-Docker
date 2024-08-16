
interface ImageProp {
    url: any;
    alt: string;
    width: number;
    height: number;
    classname: string
}

function ImageVector({ url, alt, width, height,classname }: ImageProp) {
    return (<>
        <img src={url} alt={alt} width={width} height={height} className={classname}/>
    </>
    );
}

export default ImageVector;