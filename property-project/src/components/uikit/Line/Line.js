import './Line.css';

export const Line = ({children, addClass}) => {

    return (
        
        <div className={`line ${addClass || ''}`}>
            {children}
        </div>
       
    )
}

export const Between = (props) => {
    return <Line {...props} addClass='between'/>
}

export const Rows = (props) => {
    return <Line {...props} addClass='rows'/>
}