import thanks from "../interactive-rating-component-main/images/illustration-thank-you.svg";
import Rating from "./Rating";

export default function Result(props) {
    const thanksText = "Thank you!";
    const quote = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
    return (
        <div style={styles.mainDiv}>
            <img src={thanks} alt="illustration-thank-you" style={styles.image}/>
            <div style={styles.resultDiv}>You selected {props.rate} out of 5</div>
            <h1 style={styles.thanksH1}>{thanksText}</h1>
            <p style={styles.quoteP}>{quote}</p>
        </div>
    )
}

const styles = {
    mainDiv: {
        width: 327,
        margin: "154px auto",
        backgroundColor: "#232A34",
        borderRadius: 15,
        padding: "34px 24px 37px"
    },
    image: {
        width: 144,
        height: 98,
        display: "block",
        margin: "auto",
    },
    resultDiv: {
        width: 168,
        margin: "24px auto 0px",
        backgroundColor: "#262E38",
        borderRadius: 22.5,
        color: "#FC7614",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "22px",
        padding: "5px 12px"
    },
    thanksH1: {
        marginTop: 24,
        textAlign: "center",
        color: "white",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: "30px"
    },
    quoteP: {
        marginTop: 12,
        textAlign: "center",
        color: "#969FAD",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "22px",
    }
}