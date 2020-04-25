const Post = (props) => {
  return <div style={styles.container}>
    <section style={styles.header}>
      <img style={styles.logo} src={props.author.photo}/>
      <div style={styles.userContent}>
        <div style={styles.title}>
          <span style={styles.name}>{props.author.name}</span>
          <span>{props.author.nickname}</span>
          <i className="fa fa-check"></i>
        <span>{props.date}</span>
          </div>
        <p style={styles.content}>{props.content}</p>
        <img src={props.image} style={styles.image}/>
        </div>
    </section>
    </div>
}