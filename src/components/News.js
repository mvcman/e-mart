import React, { Component } from 'react'
const news = [
    {
        title: 'India',
        heading: 'Indian democracy',
        subheading: ' faa jh ffsakjh sajffha fasfjh jfsjkfhajfha ',
        description: 'Indians demojf  fjas fsahkf fkak jalfkhkf jakkjflh aksajkkf jaj fafsjkk skjajfhh hhf fsk fkjkjh kjhf ksfkkj ',
        video: 'img/demo.mp4'
    },
    {
        title: 'India',
        heading: 'Indian democracy',
        subheading: ' faa jh ffsakjh sajffha fasfjh jfsjkfhajfha ',
        description: 'Indians demojf  fjas fsahkf fkak jalfkhkf jakkjflh aksajkkf jaj fafsjkk skjajfhh hhf fsk fkjkjh kjhf ksfkkj ',
        video: 'img/demo1.mp4'
    }
]
class News extends Component {
    render() {
        return (
            <div className="container">
                {news.map((n, i) => 
                <div className="row" key={i} style={{ padding: '20px 0px', margin: '20px 0px', height: '500px'}}>
                <div className="col-6">
                    <h1>{n.title}</h1>
                    <h2>{n.heading}</h2>
                    <h4>{n.subheading}</h4>
                    <p>{n.description}</p>
                </div>
                <div className="col-6" style={{ width: '90%', height: '70%' }}>
                    <video src={n.video} controls="true" style={{ maxWidth: '100%', maxHeight: '100%'}}></video>
                </div>
                </div>
                )}
            </div>
        )
    }
}

export default News