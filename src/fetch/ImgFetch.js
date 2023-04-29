const ImgFetch = ({imgSource, width, height, id, className, alt}) => (
    <img 
        id={id!=null ? id : ''} 
        className={className!=null ? className : ''} 
        src={require(`../img/${imgSource}.png`)}
        width={width != null ? width : ''}
        height={height != null ? height : ''}
        alt={alt != null ? alt : '산업단지연구소'}
    >
    </img>

)


export default ImgFetch;