import React from 'react'
import "./Style/Contentcss.css";
import dean from "../assets/dean.png"

function Content() {
  return (
    <div className='main'>
    <div className='what'>
      <h1 className='heding1'>What is “<span className='ath'>Athwela</span>”?</h1>
      <p className='para'>Athwela is a scholarship scheme initiated by the Students' Union of the Faculty of Information Technology, University of Moratuwa, offering monthly financial scholarships to financially underprivileged students for a successful university education. Every year, 15 students from the faculty benefit from the program, covering their living expenses and academic fees. Athwela aims to create equal opportunities for all students and inspire the next generation of leaders and innovators in the field of Information Technology.</p>
    </div>
    <div className='why'>
        <div className='count'>
            <table className='maint'>
                 
                    <tr className='rw1'>
                        <td className='asd'>15</td>
                        <td className='zxc'>Undergraduates funded yearly</td>
                    </tr>
                
               
               <div className='num'>

                <tr>
                    <td className='lev'>Level 03</td>
                    <td className='cou'>05</td>
                </tr>

                <tr>
                    <td className='lev'>Level 02</td>
                    <td className='cou'>05</td>
                </tr>

                <tr>
                    <td className='lev'>Level 01</td>
                    <td className='cou'>05</td>
                </tr>
                </div>

            </table>

        </div>

        <div className='whycont'>
            <h1 className='heding2'>Why support Athwela?</h1>
            <p className='para'>At Athwela, we believe that every student deserves equal opportunities to pursue their academic goals, regardless of their financial background. By supporting Athwela, you can play a significant role in creating a more equitable society by enabling underprivileged students to access education that they might not otherwise have been able to afford. Your contributions can help make a significant impact on the lives of students who have the potential to become future leaders and innovators in the field of Information Technology.</p>
        </div> 

    </div>
    
    <div className='dean'>
        <div className='talk'>
            <p className='para'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
            <p className='name'>Mr,Sudamtha,Faculty Dean</p>
        </div>
        <div className='imagesec'>
            <img className='deanimg'  src={dean}/>
        </div>

    </div>
    </div>
    
  )
}

export default Content
