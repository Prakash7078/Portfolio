import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdCastForEducation } from "react-icons/md";

const StudyDetails=()=>{
    return(
        <div className='py-10'>
            <VerticalTimeline animate={true} lineColor="#708090">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work  cursor-pointer"
                    contentStyle={{ background: '#D8D8D8', color: 'black'}}
                    contentArrowStyle={{ borderRight: '7px solid  ' }}
                    date="Aug 2024 - present"
                    iconStyle={{ background: 'green', color: '#fff' }}
                    icon={<MdCastForEducation />

                    }
                >
                    <h3 className="vertical-timeline-element-title">Graduate Research Assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Wichita, KS</h4>
                    <p>
                   Working on the professor's python project.<br/>
                   Technologies: Selenium for web scraping.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Aug 2024 - May 2026"
                    contentStyle={{ background: '#D8D8D8', color: 'black'}}
                    contentArrowStyle={{ borderRight: '7px solid  ' }}
                    iconStyle={{ background: '#D00000 ', color: '#fff' }}
                    icon={<MdCastForEducation />
                    }
                >
                    <h3 className="vertical-timeline-element-title">Master's in Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Wichita State University, KS</h4>
                    <p>
                    Pursuing master's in computer science at wichita state university.<br/>
                    * Intro to Database systems<br/>
                    * Machine Learning<br/>
                    * Advanced Software Engineering
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  ' }}
                    contentStyle={{ background: '#D8D8D8', color: 'black'}}
                    date="Dec 2023 - June 2024"
                    iconStyle={{ background: 'orange', color: '#fff' }}
                    icon={<MdCastForEducation />
                    }
                >
                    <h3 className="vertical-timeline-element-title">Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">7 Dots Smart Solutions Pvt Ltd</h4>
                    <p>
                    I have professional experience as a software developer. <br/>
                    * Angular<br/>
                    * Ionic Framework<br/>
                    * React<br/>
                    * SQL
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2020 - June 2024"
                    contentStyle={{ background: '#D8D8D8', color: 'black'}}
                    contentArrowStyle={{ borderRight: '7px solid  ' }}
                    iconStyle={{ background: 'blue', color: '#fff' }}
                    icon={<MdCastForEducation />
                    }
                >
                    <h3 className="vertical-timeline-element-title">B Tech(Bachelor of Technology) in Computer Science </h3>
                    <h4 className="vertical-timeline-element-subtitle">VVIT, CGPA-8.67</h4>
                    <p>
                    I completed my undergraduate studies at VVIT, where I developed proficiency in<br/><br/>
                    * Python, Java, C<br/>
                    * SQL<br/>
                    * React<br/>
                    * MongoDB<br/>
                    * CSS<br/>
                
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
export default StudyDetails;