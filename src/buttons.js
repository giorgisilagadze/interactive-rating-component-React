export default function Buttons(props) {
    return (
        <button style={styles.button}>{props.name}</button>
    )
}

const styles = {
    button : {
        width: 42,
        height: 42,
        borderRadius: "50%",
        backgroundColor: "#262E38",
        border: "none",
        color: "#7C8798",
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "24px"

    }
}