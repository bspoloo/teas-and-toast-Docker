
interface ImageProp {
    url: any;
    alt: string;
    width: number;
    height: number;
}

function ImageVector({ url, alt, width, height }: ImageProp) {
    return (<>
        <img src={url} alt={alt} width={width} height={height} />
    </>
    );
}

export default ImageVector;