import styles from './Tab.module.css';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
const url = "https://course-api.com/react-tabs-project";

const Tab = () => {
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [jobData, setJobData] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setJobData(data);
            setLoading(false);
        }
        catch (err) {
            console.log(err.message);
        }

    }
    useEffect(() => {
        fetchData()
    }, []);
    if (loading) {
        return <h3>Loading.....</h3>
    }
    return ((jobData.length > 0 && !loading) &&
        <div className={styles.Tab}>
            <section className={styles.nameList}>
                <ul>
                    {jobData.map((emp, ind) => <li
                        className={index === ind ? styles.active : ""}
                        key={emp.id}
                        onClick={() => { setIndex(ind) }}
                    >
                        {emp.company}
                    </li>)}
                </ul>
            </section>
            <section className={styles.details}>
                <h3>{jobData[index].title}</h3>
                <h3 className={styles._name}>{jobData[index].company}</h3>
                <p className={styles.date}>{jobData[index].dates}</p>
                <div className={styles.about}>
                    {jobData[index].duties.map((duty, pos) => <p key={pos}><FaAngleDoubleRight className={styles.angle} />{duty}</p>)}
                </div>
            </section>
        </div >
    )
}

export default Tab;