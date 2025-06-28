function CardUserProfile({ cardStyle, textColor, clgdata }) {
  return (
    <>
      {clgdata.map((el) => (
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            alt=""
            srcSet="https://www.w3schools.com/howto/img_avatar2.png"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>{el.first_name}</h4>
            <p>{el.email}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardUserProfile;
