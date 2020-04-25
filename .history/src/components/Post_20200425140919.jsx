import React from 'react';


const Post = (props) => {
  return (
    <div style={styles.container}>
    <section style={styles.header}>
      <img style={styles.logo} src={props.photo}/>
      <div style={styles.userContent}>
        <div style={styles.title}>
          <span style={styles.name}>{props.name}</span>
          <span>{props.nickname}</span>
          <i className="fa fa-check"></i>
        <span>{props.date}</span>
          </div>
        <p style={styles.content}>{props.content}</p>
        <img src={props.image} style={styles.image}/>
        </div>
    </section>
    </div>
  )
 
}
const styles = {
  container:{
    borderRadius: '10%',
    backgroundColor:'grey',
    paddingTop:'10px',
    paddingLeft:'10px',
    width: '450px',
    height: '300px',
    // position:'absolute',
    // top: '5%',
    // left: '40%',
    display:'flex',
    flexDirection: 'column'
    marginBottom:'50px'
  },
  title:{
    width: '300px',
    display:'flex',
    justifyContent:'space-between'
  },
  userContent:{
    marginLeft: '10px',
    display:'flex',
    flexDirection: 'column'
  },
  logo:{
    width:'70px',
    height: '70px',
    borderRadius: '50%'
  },
  image:{
    width:'90%',
    height: '200px',
    borderRadius: '10%',
    marginTop:'10px'
  },
  header:{
      display: 'flex'
  },
  name:{
    color:'white'
  },
  content: {
    color: 'white'
  }
}

export default Post;