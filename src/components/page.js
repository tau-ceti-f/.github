import "../styles/page.css";

export const Page = (props) => {

    return (
        <div className="page" ref={props.innerRef}>
            {props.text}
        </div>
    );
}