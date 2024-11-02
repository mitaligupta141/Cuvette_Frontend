import React,{useState} from "react";
import styles from "./TypeCard.module.css";
import { VscCollapseAll } from "react-icons/vsc";
import TaskCard from "./TCard";

export default function TaskTypeCard({
  name,
  icon,
  data,
  btn_data
}) {
  const [isCollapse,setIsCollapse] = useState(true);
  const handleCollapseAll = () => {
    setIsCollapse((prev) => !prev);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{name}</p>
        <button onClick={handleCollapseAll} style={{background:'none',border:'none'}}>{icon}</button>
      </div>
      <div className={styles.task_card_container}>
        {data.map((item,index)=>{
          return <TaskCard isCollapse={isCollapse} key={index} data={item} btn_data={btn_data} />
        })}
      </div>
    </div>
  );
}
