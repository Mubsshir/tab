import styles from './Tab.module.css';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useState } from 'react';
import data from './data';
//const url = "https://course-api.com/react-tabs-project";

const Tab = () => {
    const [index, setIndex] = useState(0);

    // const fetchData = async () => {
    //     console.log("I run")
    //     try {
    //         const res = await fetch(url);
    //         if (!res.ok) {
    //             console.log("OOPs")
    //             throw new Error("Somthing went wrong");
    //         }

    //         const data = await res.json();
    //         setEmpData(data);
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // }

    return (
        <div className={styles.Tab}>
            <section className={styles.nameList}>
                <ul>
                    {data.map((emp, ind) => <li
                        className={index === ind ? styles.active : ""}
                        key={emp.id}
                        onClick={() => { setIndex(ind) }}
                        id={`"${ind}"`}
                    >
                        {emp.company}
                    </li>)}
                </ul>
            </section>
            <section className={styles.details}>
                <h3>{data[index].title}</h3>
                <h3 className={styles._name}>{data[index].company}</h3>
                <p className={styles.date}>{data[index].dates}</p>
                <div className={styles.about}>
                    {data[index].duties.map((duty, pos) => <p key={pos}><FaAngleDoubleRight className={styles.angle} />{duty}</p>)}
                </div>
            </section>
        </div >
    )
}

export default Tab;