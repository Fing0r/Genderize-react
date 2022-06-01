import {ISpanMessage} from "../typing/Interfaces";

function SpanMessage(props: ISpanMessage) {
    const {message, gender} = props;

    if (!message) return null

    return (
        <div className="gender__label">
            <span
                className={gender ? "gender__result" : "gender__error"}>
                {message}
            </span>
        </div>
    )
}

export default SpanMessage;
