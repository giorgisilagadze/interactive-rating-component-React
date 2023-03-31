import star from "../interactive-rating-component-main/images/icon-star.svg"
import Buttons from "../buttons";
import {useState} from "react";

export default function Rating(props) {
    const title = "How did we do?";
    const quote = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
    const numbArray = [1,2,3,4,5];
    const submit = "submit";
  
  
    function finish() {
       props.setVisible(false)
    }
  
    return (
      <div style={styles.mainDiv}>
        <div style={styles.starDiv}>
            <img src={star}/>
        </div>
        <h1 style={styles.mainH1}>{title}</h1>
        <p style={styles.mainP}>{quote}</p>
        <div style={styles.buttonsDiv}>
            {numbArray.map((item) => {
              return <Buttons name = {item}/>
            })}
        </div>
        <button style={styles.submitButton} onClick = {finish}>{submit}</button>
  
      </div>
    )
}

const styles = {
    mainDiv: {
      width: 327,
      margin: "154px auto",
      backgroundColor: "#232A34",
      borderRadius: 15,
      padding: "24px 24px 32px"
    },
    starDiv: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "#262E38",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    mainH1: {
      marginTop: 16,
      color: "white",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "30px"
    },
    mainP: {
      marginTop: 10,
      color: "#969FAD",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px"
    },
    buttonsDiv: {
      marginTop: 24,
      display: "flex",
      gap: 17
    },
    submitButton: {
      marginTop: 24,
      width: "100%",
      height: 45,
      backgroundColor: "#FC7614",
      borderRadius: 22.5,
      border: "none",
      color: "white",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "18px",
      letterSpacing: 1.87,
      textTransform: "uppercase"
  
    }
    
  }